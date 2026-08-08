# NEXT-STEPS.md — Bcompbiz (khelmi.biz.id)

**Terakhir diupdate:** 8 Agustus 2026  
**Website:** https://khelmi.biz.id  
**Status:** Landing page + 3 halaman selesai, deployed & live

---

## Sudah Selesai

- [x] Landing page dengan semua section
- [x] Halaman /tentang (sejarah, visi, misi)
- [x] Halaman /produk (detail Family Health AI & Ahli Investasi)
- [x] Halaman /kontak (info kontak, maps, link)
- [x] SEO: robots.txt, sitemap.xml, JSON-LD (Organization + Breadcrumb + FAQ)
- [x] SEO: OG image reference, Twitter card, canonical URL
- [x] llms.txt untuk AI readiness
- [x] Image prompts (IMAGE-PROMPTS.md)
- [x] Data kontak asli dari bcompbizsurakarta.com
- [x] Deploy ke VPS (PM2 port 3004)

---

## Masih Tertunda

### 1. Upload OG Image

Buat gambar 1200x630px dan upload ke `public/og-image.png`. Prompt ada di `IMAGE-PROMPTS.md`.

### 2. Google Search Console

1. Buka https://search.google.com/search-console
2. Tambah property: `https://khelmi.biz.id`
3. Verifikasi via HTML tag atau DNS
4. Submit sitemap: `https://khelmi.biz.id/sitemap.xml`

### 3. Google Analytics

1. Buka https://analytics.google.com
2. Buat property baru untuk `khelmi.biz.id`
3. Dapatkan Measurement ID (G-XXXXXXX)
4. Kirim ke saya, saya pasang kodenya

### 4. Generate Gambar Produk

Gunakan prompt di `IMAGE-PROMPTS.md` untuk generate:
- OG Image (1200x630)
- Screenshot Family Health AI
- Screenshot Ahli Investasi
- Hero background
- Team/About image

### 5. Tambah Blog (Opsional)

Buat folder `src/app/blog/` untuk artikel SEO.

---

## Data Kontak (Sudah Terpasang)

| Data | Nilai |
|------|-------|
| WhatsApp | 0812-2791-6969 |
| Email | cs@bcomp-online.id |
| Alamat | Cluster Grand Permata Blok Ruby No 70, Gajahan, Karanganyar, Surakarta 57716 |
| Maps | -7.5755, 110.8243 |
| Jam | Senin-Sabtu 08:00-17:00 WIB |

---

## Halaman Website

| Halaman | URL | Status |
|---------|-----|--------|
| Landing Page | / | ✅ |
| Tentang | /tentang | ✅ |
| Produk | /produk | ✅ |
| Kontak | /kontak | ✅ |
| Blog | /blog | ❌ Belum |

---

## Deploy Workflow

```bash
# Di lokal:
git add . && git commit -m "type: deskripsi" && git push

# Deploy ke VPS:
ssh vps-saya "cd /www/wwwroot/khelmi.biz.id && git pull origin master && rm -rf .next && npm run build && pm2 restart khelmi-biz-id"
```

---

**Dibuat oleh:** OpenCode AI Assistant  
**Terakhir diupdate:** 8 Agustus 2026
