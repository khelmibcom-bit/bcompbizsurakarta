const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Check /layanan page
  console.log('=== /layanan ===');
  await page.goto('https://khelmi.biz.id/layanan', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const layananTitle = await page.title();
  const layananH1 = await page.$eval('h1', el => el.textContent).catch(() => 'NOT FOUND');
  const layananStatus = await page.evaluate(() => document.readyState);
  console.log(`  Title: ${layananTitle}`);
  console.log(`  H1: ${layananH1}`);
  console.log(`  Status: ${layananStatus}`);
  await page.screenshot({ path: 'check-layanan.png' });
  
  // Check /#layanan anchor
  console.log('\n=== /#layanan ===');
  await page.goto('https://khelmi.biz.id/#layanan', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const anchorSection = await page.evaluate(() => {
    const el = document.getElementById('layanan');
    if (!el) return { found: false };
    const rect = el.getBoundingClientRect();
    return { found: true, top: rect.top, height: rect.height, visible: rect.top < window.innerHeight };
  });
  console.log(`  Section found: ${anchorSection.found}`);
  console.log(`  Position: top=${anchorSection.top}, height=${anchorSection.height}`);
  console.log(`  Visible: ${anchorSection.visible}`);
  await page.screenshot({ path: 'check-anchor-layanan.png' });
  
  // Check /produk page
  console.log('\n=== /produk ===');
  await page.goto('https://khelmi.biz.id/produk', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const produkTitle = await page.title();
  const produkH1 = await page.$eval('h1', el => el.textContent).catch(() => 'NOT FOUND');
  console.log(`  Title: ${produkTitle}`);
  console.log(`  H1: ${produkH1}`);
  await page.screenshot({ path: 'check-produk.png' });
  
  // Check navigation links
  console.log('\n=== NAVIGATION ===');
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const navLinks = await page.$$eval('nav a', links => 
    links.map(a => ({ text: a.textContent?.trim(), href: a.href }))
  );
  navLinks.forEach(l => console.log(`  ${l.text} → ${l.href}`));
  
  // Check mobile menu
  console.log('\n=== MOBILE MENU ===');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('https://khelmi.biz.id', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const mobileLinks = await page.$$eval('nav a', links => 
    links.map(a => ({ text: a.textContent?.trim(), href: a.href }))
  );
  mobileLinks.forEach(l => console.log(`  ${l.text} → ${l.href}`));
  
  console.log('\nScreenshots saved!');
  await browser.close();
})();
