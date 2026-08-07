# NEXT-STEPS.md — Bcompbiz Development

**Terakhir diupdate:** 7 Agustus 2026  
**Website:** https://dev.khelmi.biz.id  
**Repo:** https://github.com/khelmibcom-bit/bcompbizsurakarta  
**VPS Folder:** /www/wwwroot/dev.khelmi.biz.id  
**Status:** Landing page 95% selesai, deployed & live

---

## Sudah Selesai

- [x] Inisialisasi Next.js 16 + Tailwind CSS 4
- [x] Desain Editorial Luxury (light theme, serif fonts)
- [x] Semua section: Hero, About, Products, Services, TechStack, Testimonials, FAQ, CTA, Contact
- [x] Mobile-first responsive design
- [x] Data kontak asli dari bcompbizsurakarta.com
- [x] SEO: JSON-LD, sitemap, robots.txt, canonical URL
- [x] Loading screen, scroll progress, floating WhatsApp
- [x] Deploy ke VPS (PM2 port 3002 + Nginx proxy)
- [x] Fix nginx 404 static chunks
- [x] HTTPS aktif

---

## Masih Tertunda

### 1. Logo & Branding

| Item | Lokasi | Status |
|------|--------|--------|
| Logo SVG | `public/favicon.svg` | Ganti dengan logo asli |
| OG Image | `src/app/layout.tsx` → metadata | Belum ada (1200x630px) |
| Apple Touch Icon | `public/` | Belum ada |

**Yang dibutuhkan:**
- File logo SVG/PNG (transparent background)
- OG Image 1200x630 untuk social sharing (WhatsApp, Facebook, LinkedIn)

---

### 2. Screenshot Produk (Opsional)

| Item | Lokasi | Status |
|------|--------|--------|
| Screenshot Family Health AI | `src/components/Products.tsx` | Belum ada |
| Screenshot Ahli Investasi | `src/components/Products.tsx` | Belum ada |

Sumber:
- https://health.khelmi.biz.id
- https://trade.khelmi.biz.id

---

### 3. Referensi Desain

Anda akan memberikan referensi website untuk dianalisa dan diadopsi desainnya.

---

### 4. SEO & Analytics

| Item | Status |
|------|--------|
| Submit ke Google Search Console | Belum |
| Submit sitemap ke GSC | Belum |
| Pasang Google Analytics / Plausible | Belum |
| Test Rich Snippets | Belum |
| Daftar Google My Business | Belum |

---

### 5. Optimasi Lanjutan (Opsional)

| Fitur | Prioritas | Estimasi |
|-------|-----------|----------|
| Google Analytics / Plausible | Tinggi | 30 menit |
| Contact form (Formspree / custom API) | Sedang | 2 jam |
| Dark/light mode toggle | Rendah | 2 jam |
| Blog/articles page | Rendah | 4 jam |

---

## Deploy Workflow

### Update dari Lokal ke VPS

```bash
# Di lokal:
git add .
git commit -m "type(scope): deskripsi"
git push origin master

# Di VPS (otomatis via SSH):
ssh vps-saya "cd /www/wwwroot/dev.khelmi.biz.id && git pull origin master && rm -rf .next && npm run build && pm2 restart bcompbiz"
```

### Port & Service

| Service | Port | PM2 Name |
|---------|------|----------|
| Bcompbiz (dev.khelmi.biz.id) | 3002 | bcompbiz |
| Family Health AI (health.khelmi.biz.id) | 3001 | family-health-ai |
| Ahli Investasi (trade.khelmi.biz.id) | 3000 | khelmi-biz |

### Nginx Config

Lokasi: `/www/server/panel/vhost/nginx/dev.khelmi.biz.id.conf`

```nginx
location / {
    proxy_pass http://127.0.0.1:3002;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

---

## Data Kontak (Sudah Terpasang)

| Data | Nilai |
|------|-------|
| WhatsApp | 0812-2791-6969 |
| Email | info@bcompbizsurakarta.com |
| Alamat | Cluster Grand Permata Blok Ruby No 70, Gajahan, Karanganyar, Surakarta 57716 |
| Maps | -7.5755, 110.8243 |
| Jam Operasional | Senin-Sabtu 08:00-17:00 WIB |

---

**Dibuat oleh:** OpenCode AI Assistant  
**Terakhir diupdate:** 7 Agustus 2026
