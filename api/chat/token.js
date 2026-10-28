export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const secret = process.env.DIRECT_LINE_SECRET;

  if (!secret) {
    return res.status(500).json({
      error: "Chat is not configured",
    });
  }

  try {
    const response = await fetch(
      "https://directline.botframework.com/v3/directline/tokens/generate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      return res.status(502).json({
        error: "Unable to connect to bot service",
      });
    }

    const data = await response.json();

    return res.status(200).json({
      token: data.token,
    });
  } catch {
    return res.status(500).json({
      error: "Unable to connect to bot service",
    });
  }
}