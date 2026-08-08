# Image Prompts — Bcompbiz

Gunakan prompt ini di Midjourney, DALL-E, atau AI image generator lainnya.

---

## 1. OG Image (1200x630px)

```
A premium dark tech company hero banner for "Bcompbiz" software development studio. Dark navy background with subtle neon blue and purple gradient orbs. Modern sans-serif typography "BCOMPBIZ" in white, tagline "Software Development Studio" in lighter weight below. Minimalist, clean, futuristic aesthetic inspired by Vercel and Linear. No stock photos, abstract geometric shapes with subtle grid pattern. Corporate, professional, premium feel. --ar 16:9 --style raw
```

---

## 2. Family Health AI Product Screenshot

```
A clean dark-themed health dashboard UI screenshot showing a modern mobile app interface. Features include: health score circle gauge (85/100), body composition metrics (BMI, body fat percentage), lab results analysis cards with green/red indicators, habit tracking calendar grid, and AI chat interface at bottom. Color scheme: dark background (#0a0a0f) with emerald green (#10b981) and teal accents. Minimalist, premium healthcare app design. --ar 9:16 --style raw
```

---

## 3. Ahli Investasi Product Screenshot

```
A sophisticated dark-themed investment dashboard UI screenshot showing a modern web app interface. Features include: crypto price charts with candlestick patterns, portfolio pie chart allocation, AI consensus voting panel (Bullish/Bearish/Neutral from 4 AI engines), market sentiment gauge, and trading journal table. Color scheme: dark background (#0a0a0f) with amber (#f59e0b) and orange accents. Fintech, premium, data-rich dashboard design. --ar 16:9 --style raw
```

---

## 4. Hero Background (Abstract)

```
Abstract dark tech background with flowing neon blue (#4f8fff) and purple (#8b5cf6) light streams on deep navy (#0a0a0f). Subtle geometric grid lines. Ethereal, futuristic, premium software company aesthetic. Soft glow effects, no text, no logos. Suitable as website hero background. --ar 16:9 --style raw
```

---

## 5. Team/About Section Image

```
A modern software development team working in a minimalist office space. Dark ambient lighting with neon blue accent lights. Developers working on multiple monitors showing code. Clean, professional, tech startup atmosphere. Cinematic lighting, shallow depth of field. No faces visible, focus on hands on keyboards and screens. --ar 16:9 --style raw
```

---

## 6. Logo/Favicon (SVG style)

```
A minimalist geometric letter "B" logo mark on transparent background. Clean modern sans-serif typography. The letter B is formed by two bold parallel vertical lines with curved connections. Color: gradient from neon blue (#4f8fff) to purple (#8b5cf6). Sharp edges, no serifs, tech startup aesthetic. Simple enough to work as favicon at 32x32px. Vector style, flat design. --ar 1:1 --style raw
```

---

## 7. Habits OS Feature Illustration

```
A clean dark-themed UI illustration showing a habit tracking calendar grid. 7x4 grid of small rounded squares, most filled with emerald green (#10b981) checkmarks, a few empty. A circular progress ring shows 85% completion. Small icons for habits: water drop, exercise, sleep, meditation. Dark background (#0a0a0f) with subtle green glow. Minimalist, premium health app design. --ar 16:9 --style raw
```

---

## 8. Portfolio Doctor Feature Illustration

```
A clean dark-themed UI illustration showing a portfolio health diagnostic dashboard. A large circular gauge showing "Portfolio Health: 78/100" with green zone. Below: pie chart showing asset allocation (Crypto 40%, Stocks 35%, Gold 15%, Cash 10%). Risk score bar in amber. Diversification index number. Dark background (#0a0a0f) with amber (#f59e0b) accents. Fintech, premium, data visualization. --ar 16:9 --style raw
```

---

## 9. AI Analyze Feature Illustration

```
A clean dark-themed UI illustration showing an AI analysis panel. Four AI engine logos (Gemini, Claude, OpenAI, Grok) in a row, each with a colored indicator light. Below: a consensus voting bar showing "Bullish 75%" in green. A neural network visualization with connecting nodes in the background. Dark background (#0a0a0f) with blue (#4f8fff) and purple (#8b5cf6) accents. AI, machine learning, futuristic. --ar 16:9 --style raw
```

---

## 10. Service Icons Set (6 icons)

```
Six minimalist line icons arranged in a 3x2 grid on dark background (#0a0a0f). Icons: 1) Brain with circuit nodes (AI), 2) Browser window with code brackets (Web), 3) Mobile phone with app grid (Mobile), 4) Database cylinder with connections (Backend), 5) Speedometer gauge (Performance), 6) Shield with lock (Security). Thin neon blue (#4f8fff) line art style, consistent stroke width, modern tech aesthetic. --ar 3:2 --style raw
```

---

## 11. Testimonial Avatars (3 variations)

```
Three abstract avatar circles arranged in a row on dark background (#0a0a0f). Each avatar is a gradient circle with a single letter: "P" in emerald, "P" in amber, "T" in blue. Below each: subtle glow effect. Minimalist, modern, suitable as placeholder testimonial avatars. Clean, professional. --ar 3:1 --style raw
```

---

## 12. 404 Error Page Background

```
A dark abstract tech background with a large translucent "404" number. Subtle neon blue (#4f8fff) and purple (#8b5cf6) gradient orbs behind the number. Minimal geometric grid lines. Ethereal, futuristic, not alarming. Suitable as 404 error page background. --ar 16:9 --style raw
```

---

## 13. Blog Post Cover Template

```
A dark tech blog post cover template. Abstract geometric shapes in neon blue (#4f8fff) and purple (#8b5cf6) flowing across a deep navy (#0a0a0f) background. Space for title text on the left side. Minimal, editorial, premium tech blog aesthetic. No text, no logos. --ar 16:9 --style raw
```

---

## 14. Mobile App Store Screenshots

```
A set of 3 dark-themed mobile app screens shown side by side on a gradient background. Screen 1: Login with Google button. Screen 2: Health dashboard with score gauge and metrics. Screen 3: AI chat interface. Consistent dark UI (#0a0a0f) with emerald green accents. Clean, modern, premium mobile app design. --ar 16:9 --style raw
```

---

## Cara Generate

1. Buka Midjourney (Discord) atau DALL-E (ChatGPT)
2. Copy prompt di atas
3. Generate dengan ukuran yang sesuai
4. Download hasilnya
5. Upload ke folder `public/images/` di project
6. Update kode untuk menampilkan gambar

## File Mapping

| # | Prompt | Simpan ke | Digunakan di |
|---|--------|-----------|--------------|
| 1 | OG Image | `public/og-image.png` | layout.tsx metadata |
| 2 | Family Health AI | `public/images/family-health-ai.png` | /produk |
| 3 | Ahli Investasi | `public/images/ahli-investasi.png` | /produk |
| 4 | Hero Background | `public/images/hero-bg.png` | Hero.tsx |
| 5 | Team Image | `public/images/team.png` | /tentang |
| 6 | Logo | `public/favicon.svg` | layout.tsx |
| 7 | Habits OS | `public/images/habits-os.png` | /produk |
| 8 | Portfolio Doctor | `public/images/portfolio-doctor.png` | /produk |
| 9 | AI Analyze | `public/images/ai-analyze.png` | /produk |
| 10 | Service Icons | `public/images/services.png` | Landing page |
| 11 | Testimonial Avatars | `public/images/avatars.png` | Landing page |
| 12 | 404 Background | `public/images/404-bg.png` | 404 page |
| 13 | Blog Cover | `public/images/blog-cover.png` | /blog |
| 14 | App Screenshots | `public/images/app-screenshots.png` | /produk |
