const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Check Services section alignment
  const services = await page.evaluate(() => {
    const section = document.getElementById('layanan');
    if (!section) return null;
    const items = section.querySelectorAll('.group');
    return Array.from(items).map((item, i) => {
      const rect = item.getBoundingClientRect();
      const num = item.querySelector('.font-mono');
      const title = item.querySelector('h3');
      return {
        index: i,
        left: rect.left,
        numLeft: num?.getBoundingClientRect().left,
        titleLeft: title?.getBoundingClientRect().left,
        width: rect.width,
      };
    });
  });
  console.log('=== SERVICES ALIGNMENT ===');
  console.log(JSON.stringify(services, null, 2));
  
  // Check if ScrollBackground is rendering
  const bgCheck = await page.evaluate(() => {
    const bg = document.querySelector('.fixed.inset-0.pointer-events-none');
    if (!bg) return { exists: false };
    const children = bg.children;
    return {
      exists: true,
      childCount: children.length,
      firstChildTag: children[0]?.tagName,
      firstChildStyle: children[0]?.getAttribute('style')?.slice(0, 100),
    };
  });
  console.log('\n=== SCROLL BACKGROUND ===');
  console.log(JSON.stringify(bgCheck, null, 2));
  
  // Check AnimateOnScroll elements
  const animElements = await page.evaluate(() => {
    const els = document.querySelectorAll('[style*="opacity: 0"]');
    return {
      count: els.length,
      samples: Array.from(els).slice(0, 3).map(el => ({
        tag: el.tagName,
        style: el.getAttribute('style')?.slice(0, 150),
        className: el.className?.slice(0, 50),
      })),
    };
  });
  console.log('\n=== ANIMATE ON SCROLL ===');
  console.log(JSON.stringify(animElements, null, 2));
  
  // Scroll and check if elements become visible
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(1500);
  
  const afterScroll = await page.evaluate(() => {
    const els = document.querySelectorAll('[style*="opacity: 0"]');
    return els.length;
  });
  console.log(`\nAfter scroll - elements still opacity:0: ${afterScroll}`);
  
  // Take screenshots
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'audit-layanan-1.png' });
  
  await page.evaluate(() => document.getElementById('layanan')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'audit-layanan-2.png' });
  
  await page.evaluate(() => document.getElementById('produk')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'audit-produk-2.png' });
  
  console.log('\nScreenshots saved!');
  await browser.close();
})();
