import { useEffect, useRef, useState } from "react";
import ReactWebChat, { createDirectLine } from "botframework-webchat";

export default function ChatBot() {
  const [directLine, setDirectLine] = useState(null);
  const [error, setError] = useState("");
  const userIdRef = useRef(`dl_${crypto.randomUUID()}`);

  useEffect(() => {
    let cancelled = false;
    let connection;
    const controller = new AbortController();
    const configuredApiUrl = import.meta.env.VITE_CHAT_API_URL?.trim();
    const apiBaseUrl = configuredApiUrl
      ? configuredApiUrl.replace(/\/+$/, "")
      : import.meta.env.DEV
        ? "https://prostate-bot-backend-bjbqhbafbrbac5cs.newzealandnorth-01.azurewebsites.net"
        : "";
    const tokenEndpoint = `${apiBaseUrl}/api/chat/token`;

    async function connect() {
      try {
        const response = await fetch(tokenEndpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Token request failed: ${response.status}`);
        }

        const { token } = await response.json();
        if (!token) {
          throw new Error("Token response did not contain a token");
        }

        if (cancelled) return;

        connection = createDirectLine({ token });
        setDirectLine(connection);
      } catch (exception) {
        if (!cancelled) {
          console.error("Unable to initialize Direct Line chat:", exception);
          setError("Unable to connect to the chat. Please try again.");
        }
      }
    }

    connect();

    return () => {
      cancelled = true;
      controller.abort();
      connection?.end?.();
    };
  }, []);

  if (error) return <p>{error}</p>;

  if (!directLine) return <p>Connecting to assistant...</p>;

  return (
    <div className="h-full w-full">
      <ReactWebChat
        directLine={directLine}
        userID={userIdRef.current}
        username="Website User"
        locale="en-US"
        styleOptions={{
          hideUploadButton: true,
        }}
      />
    </div>
  );
}