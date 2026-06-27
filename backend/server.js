require("dotenv").config();

const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const ResumeBuilder = require("./ResumeBuilder");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.post("/export", async (req, res) => {
  try {
    const resume = req.body;
    const html = ResumeBuilder.build(resume);

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    
    // Defines the HTML content structured into physical pages
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.emulateMediaType('screen');

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true, 
      margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" }
    });

    await browser.close();

    const candidateName = resume.personal?.personal?.name || resume.personal?.title || "Curriculum";
    const fileName = `${candidateName.replace(/\s+/g, "_")}.pdf`;

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`
    });

    res.send(pdf);

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => {
  console.log("CV Export running on port 3001");
});