/* eslint-disable @next/next/no-img-element -- ImageResponse (Satori) only supports plain <img>. */
// Social sharing image, rendered once at build time to /og.png.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const dynamic = "force-static";

const pngUri = (data: Buffer) => `data:image/png;base64,${data.toString("base64")}`;

export async function GET() {
  const fontDir = join(process.cwd(), "assets-source", "fonts");
  const brandDir = join(process.cwd(), "public", "brand");
  const [medium, mark, wordmark] = await Promise.all([
    readFile(join(fontDir, "Poppins-Medium.ttf")),
    readFile(join(brandDir, "saph-mark.png")),
    readFile(join(brandDir, "saph-wordmark-dark.png")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 70,
        padding: "0 90px",
        fontFamily: "Poppins",
        color: "#072739",
        background: "radial-gradient(circle at 35% 50%, #e6eef3 0%, #a3bac8 55%, #2c6381 120%)",
      }}
    >
      <img src={pngUri(mark)} width={320} height={320} alt="" />
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
        <img src={pngUri(wordmark)} width={480} height={88} alt="" />
        <div style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.3, marginTop: 24 }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, marginTop: 24, color: "#245d7b" }}>
          {`Youth-led robotics · ${site.contact.location}`}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Poppins", data: medium, weight: 500, style: "normal" }],
    },
  );
}
