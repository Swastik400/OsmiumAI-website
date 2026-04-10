import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text, speaker } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "text is required" }, { status: 400 });
    }

    // Two-host podcast voices: shubh (male/default) and roopa (female)
    const voiceName = speaker === "female" || speaker === "roopa" ? "roopa" : "shubh";
    const isRoopa = voiceName === "roopa";

    const res = await fetch("https://api.sarvam.ai/text-to-speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": process.env.SARVAM_API_KEY!,
      },
      body: JSON.stringify({
        inputs: [text],
        target_language_code: "en-IN",
        speaker: voiceName,
        pace: isRoopa ? 1.12 : 1.02,
        model: "bulbul:v3",
        sample_rate: 22050,
        enable_preprocessing: true,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Sarvam API error:", res.status, errText);
      return NextResponse.json(
        { error: "TTS API failed", details: errText },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Sarvam returns { audios: ["base64..."] }
    const audioBase64 = data.audios?.[0];
    if (!audioBase64) {
      return NextResponse.json({ error: "No audio returned" }, { status: 500 });
    }

    return NextResponse.json({ audio: audioBase64 });
  } catch (err) {
    console.error("TTS route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
