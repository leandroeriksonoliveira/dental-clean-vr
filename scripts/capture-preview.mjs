import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const previewPath = path.join(root, "assets/proposta-preview-hero-site.png");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

await page.goto("https://dental-clean-vr.vercel.app", {
  waitUntil: "networkidle",
  timeout: 60000,
});

await page.waitForTimeout(2000);

await page.screenshot({
  path: previewPath,
  fullPage: false,
  clip: { x: 0, y: 0, width: 1440, height: 900 },
});

console.log("Preview saved:", previewPath);
await browser.close();
