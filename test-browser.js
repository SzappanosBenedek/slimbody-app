import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  try {
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    const content = await page.content();
    if (!content.includes('SlimBody')) {
      console.log("No Slimbody text found. Content length:", content.length);
    } else {
      console.log("Slimbody text found!");
    }
  } catch (e) {
    console.log("Navigation error:", e.message);
  }

  await browser.close();
})();
