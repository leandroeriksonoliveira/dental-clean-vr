import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const files = [
  {
    html: path.join(root, "Proposta Comercial — Veltro Digital & Dental Clean.html"),
    pdf: path.join(root, "Proposta Comercial — Veltro Digital & Dental Clean.pdf"),
  },
  {
    html: path.join(root, "Relatorio Conformidade Dental Clean.html"),
    pdf: path.join(root, "Relatorio Conformidade Dental Clean.pdf"),
  },
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const file of files) {
  const url = `file://${file.html}`;
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.pdf({
    path: file.pdf,
    format: "A4",
    printBackground: true,
    margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
  });
  console.log("PDF saved:", file.pdf);
}

await browser.close();
