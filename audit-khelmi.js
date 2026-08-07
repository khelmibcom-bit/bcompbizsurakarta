const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Check spacing
  const spacing = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    return Array.from(sections).map(s => {
      const style = window.getComputedStyle(s);
      return {
        id: s.id || s.className.slice(0, 40),
        pt: style.paddingTop,
        pb: style.paddingBottom,
        height: s.offsetHeight,
      };
    });
  });
  console.log('=== SPACING ===');
  spacing.forEach(s => console.log(`  ${s.id}: pt=${s.pt} pb=${s.pb} h=${s.height}px`));
  
  // Check scroll animations
  const animations = await page.evaluate(() => {
    const els = document.querySelectorAll('[style*="opacity"]');
    return els.length;
  });
  console.log('\n=== ANIMATIONS ===');
  console.log(`Elements with opacity style: ${animations}`);
  
  // Check ScrollBackground component
  const scrollBg = await page.evaluate(() => {
    const el = document.querySelector('.fixed.inset-0.pointer-events-none');
    return el ? 'Found' : 'Not found';
  });
  console.log(`ScrollBackground: ${scrollBg}`);
  
  // Check products section for empty space
  const produkSection = await page.evaluate(() => {
    const el = document.getElementById('produk');
    if (!el) return null;
    const cards = el.querySelectorAll('.card-tech');
    return {
      height: el.offsetHeight,
      cardCount: cards.length,
      innerText: el.innerText.slice(0, 300),
    };
  });
  console.log('\n=== PRODUCTS ===');
  console.log(JSON.stringify(produkSection, null, 2));
  
  // Check font loading
  const fontLoaded = await page.evaluate(() => {
    return document.fonts.check('16px "DM Sans"');
  });
  console.log(`\nDM Sans font loaded: ${fontLoaded}`);
  
  // Screenshot
  await page.screenshot({ path: 'audit-khelmi-hero.png' });
  
  await page.evaluate(() => document.querySelector('#produk')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'audit-khelmi-produk.png' });
  
  await page.evaluate(() => document.querySelector('#kontak')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'audit-khelmi-kontak.png' });
  
  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'audit-khelmi-mobile.png', fullPage: true });
  
  console.log('\nScreenshots saved!');
  await browser.close();
})();
