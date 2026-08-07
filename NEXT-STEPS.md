# NEXT-STEPS.md — Bcompbiz Surakarta Landing Page

**Terakhir diupdate:** 7 Agustus 2026  
**Status:** Landing page 90% selesai, menunggu data dari user

---

## WAJIB Dikerjakan Sebelum Deploy

### 1. Data Kontak (Update di Code)

| Item | File | Baris | Status |
|------|------|-------|--------|
| Email perusahaan | `src/components/Contact.tsx` | `contact@bcompbizsurakarta.com` | GANTI |
| Email perusahaan | `src/components/CTA.tsx` | `contact@bcompbizsurakarta.com` | GANTI |
| Nomor WhatsApp | `src/components/Contact.tsx` | `628xxxxxxxxxx` | GANTI |
| Nomor WhatsApp | `src/components/CTA.tsx` | `628xxxxxxxxxx` | GANTI |

**Format WhatsApp:** `628XXXXXXXXXX` (tanpa +, tanpa spasi/tanda hubung)

---

### 2. Logo & Branding

| Item | Lokasi File | Status |
|------|-------------|--------|
| Logo utama (favicon) | `src/app/favicon.ico` | GANTI |
| Logo untuk Header | `src/components/Header.tsx` | Perlu ditambahkan `<Image />` |
| Logo untuk Footer | `src/components/Footer.tsx` | Perlu ditambahkan `<Image />` |
| Open Graph image | `src/app/layout.tsx` → metadata | BELUM ADA |

**Format yang dibutuhkan:**
- Favicon: `.ico` atau `.png` 32x32
- Logo: `.svg` atau `.png` (transparent background)
- OG Image: `.png` 1200x630

---

### 3. Screenshot Produk (Opsional tapi Rekomendasi)

| Item | Lokasi | Status |
|------|--------|--------|
| Screenshot Family Health AI | `src/components/Products.tsx` | BELUM ADA |
| Screenshot Ahli Investasi | `src/components/Products.tsx` | BELUM ADA |

**Tips:** Ambil screenshot dari production:
- `https://health.khelmi.biz.id`
- `https://trade.khelmi.biz.id`

---

## DEPLOY ke VPS

### 4. Persiapan VPS

```bash
# 1. SSH ke VPS
ssh root@YOUR_VPS_IP

# 2. Pastikan Node.js terinstall (v18+)
node --version

# 3. Pastikan PM2 terinstall
pm2 --version

# 4. Buat folder production (jika belum ada)
mkdir -p /www/wwwroot/bcompbizsurakarta.com
```

### 5. Upload Code ke VPS

```bash
# Opsi A: Git (rekomendasi)
# Di VPS:
cd /www/wwwroot/bcompbizsurakarta.com
git clone https://github.com/khelmibcom-bit/bcompbizsurakarta.git .
```

```bash
# Opsi B: SCP/SFTP (tanpa git)
# Di lokal:
scp -r E:\bcompbizsurakarta\* root@YOUR_VPS_IP:/www/wwwroot/bcompbizsurakarta.com/
```

### 6. Install & Build di VPS

```bash
cd /www/wwwroot/bcompbizsurakarta.com
npm install
npm run build
```

### 7. Setup PM2

Buat file `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'bcompbizsurakarta',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/www/wwwroot/bcompbizsurakarta.com',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
};
```

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 8. Setup Nginx

Buat config di `/www/server/panel/vhost/nginx/bcompbizsurakarta.com.conf`:

```nginx
server {
    listen 80;
    server_name bcompbizsurakarta.com www.bcompbizsurakarta.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
nginx -t
nginx -s reload
```

### 9. SSL Certificate

```bash
# Via BT Panel atau certbot:
certbot --nginx -d bcompbizsurakarta.com -d www.bcompbizsurakarta.com
```

---

## SETELAH Deploy

### 10. Verifikasi

| Checklist | URL | Status |
|-----------|-----|--------|
| Website bisa diakses | `https://bcompbizsurakarta.com` | [ ] |
| HTTPS aktif | `https://bcompbizsurakarta.com` | [ ] |
| Mobile responsive | Chrome DevTools | [ ] |
| Semua link berfungsi | Klik semua link | [ ] |
| WhatsApp link benar | Klik tombol WhatsApp | [ ] |
| Email link benar | Klik tombol email | [ ] |
| OG image tampil | Share ke WhatsApp/social media | [ ] |

### 11. SEO Dasar

| Item | Status |
|------|--------|
| Submit ke Google Search Console | [ ] |
| Submit sitemap (`/sitemap.xml`) | [ ] |
| Daftar ke Google My Business | [ ] |
| Test Rich Snippets | [ ] |

---

## OPSIONAL — Enhancement

### Fitur Tambahan (Bisa Kapan Saja)

| Fitur | Prioritas | Estimasi |
|-------|-----------|----------|
| Tambah animasi scroll (Framer Motion) | Tinggi | 2 jam |
| Tambah section Testimoni | Sedang | 1 jam |
| Tambah section FAQ | Sedang | 1 jam |
| Tambah blog/articles page | Rendah | 4 jam |
| Tambah dark/light mode toggle | Rendah | 2 jam |
| Tambah analytics (Google Analytics / Plausible) | Tinggi | 30 menit |
| Tambah contact form (Formspree / custom API) | Sedang | 2 jam |
| Tambah loading screen / skeleton | Rendah | 1 jam |

---

## DATA YANG SAYA BUTUHKAN DARI ANDA

Mohon kirimkan data berikut agar saya bisa update code:

1. **Email perusahaan** — alamat email yang ingin ditampilkan
2. **Nomor WhatsApp** — format `628XXXXXXXXXX`
3. **Logo** — file logo (SVG/PNG/ICO)
4. **Screenshot produk** — (opsional) screenshot Family Health AI & Ahli Investasi
5. **Akses VPS** — IP, username, password/key (untuk deploy)
6. **Nama domain** — sudah pointing ke VPS atau belum?

---

**Dibuat oleh:** OpenCode AI Assistant  
**Tanggal:** 7 Agustus 2026
