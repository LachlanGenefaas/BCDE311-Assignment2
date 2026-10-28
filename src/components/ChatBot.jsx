import { useEffect, useState } from "react";
import ReactWebChat, { createDirectLine } from "botframework-webchat";

export default function ChatBot() {
  const [directLine, setDirectLine] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    let connection;

    async function connect() {
      try {
        const response = await fetch("/api/chat/token", {
        method: "POST",
        });

        if (!response.ok) {
        throw new Error(`Token request failed: ${response.status}`);
        }

        const { token } = await response.json();



        if (cancelled) return;

        connection = createDirectLine({ token });
        setDirectLine(connection);
      } catch {
        if (!cancelled) {
          setError("Unable to connect to the chat. Please try again.");
        }
      }
    }

    connect();

    return () => {
      cancelled = true;
      connection?.end?.();
    };
  }, []);

  if (error) return <p>{error}</p>;

  if (!directLine) return <p>Connecting to assistant...</p>;

  return (
    <div style={{ height: 500, width: "100%" }}>
      <ReactWebChat
        directLine={directLine}
        userID={`dl_${crypto.randomUUID()}`}
        username="Website User"
        locale="en-US"
      />
    </div>
  );
}