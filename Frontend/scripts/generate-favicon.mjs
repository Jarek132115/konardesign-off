import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public");

const markSvg = readFileSync(resolve(publicDir, "favicon-mark.svg"), "utf8");
const markDataUri = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

const composite = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.1875)}" ry="${Math.round(size * 0.1875)}" fill="#ffffff"/>
  <image href="${markDataUri}" x="${Math.round(size * 0.1562)}" y="${Math.round(size * 0.1562)}" width="${Math.round(size * 0.6875)}" height="${Math.round(size * 0.6875)}" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;

for (const size of [16, 32, 64, 180]) {
    const buf = Buffer.from(composite(size));
    const out = resolve(publicDir, size === 180 ? "apple-touch-icon.png" : `favicon-${size}.png`);
    await sharp(buf).png().toFile(out);
    console.log("wrote", out);
}
