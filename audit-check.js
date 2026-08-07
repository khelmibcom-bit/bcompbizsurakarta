const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  // Check the thin line issue
  const fixedElements = await page.evaluate(() => {
    const els = document.querySelectorAll('.fixed');
    return Array.from(els).map(el => ({
      className: el.className?.slice(0, 60),
      tag: el.tagName,
      height: el.offsetHeight,
      style: el.getAttribute('style')?.slice(0, 100),
    }));
  });
  console.log('=== FIXED ELEMENTS ===');
  fixedElements.forEach(el => console.log(`  ${el.tag} h=${el.height} class=${el.className}`));
  
  // Check Services section borders
  const servicesBorders = await page.evaluate(() => {
    const section = document.getElementById('layanan');
    if (!section) return null;
    const items = section.querySelectorAll('.group');
    return Array.from(items).map((item, i) => {
      const style = window.getComputedStyle(item);
      const rect = item.getBoundingClientRect();
      return {
        index: i,
        borderBottom: style.borderBottom,
        borderRight: style.borderRight,
        bottom: rect.bottom,
        right: rect.right,
        height: rect.height,
      };
    });
  });
  console.log('\n=== SERVICES BORDERS ===');
  console.log(JSON.stringify(servicesBorders, null, 2));
  
  // Check if scan line is visible during scroll
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(500);
  
  const scanLine = await page.evaluate(() => {
    const bg = document.querySelector('.fixed.inset-0.pointer-events-none');
    if (!bg) return null;
    const lines = bg.querySelectorAll('[style*="linear-gradient"]');
    return Array.from(lines).map(l => ({
      tag: l.tagName,
      height: l.offsetHeight,
      style: l.getAttribute('style')?.slice(0, 120),
    }));
  });
  console.log('\n=== SCAN LINES ===');
  console.log(JSON.stringify(scanLine, null, 2));
  
  // Take screenshots
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  
  // Scroll slowly and take screenshots
  for (let y = 0; y <= 3000; y += 500) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(300);
  }
  await page.screenshot({ path: 'audit-scroll-test.png' });
  
  // Services section
  await page.evaluate(() => document.getElementById('layanan')?.scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'audit-services-border.png' });
  
  console.log('\nScreenshots saved!');
  await browser.close();
})();
