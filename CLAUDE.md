# CLAUDE.md — Bcompbiz Surakarta

## Project Overview

Website portfolio perusahaan software development **Bcompbiz Surakarta**. Landing page premium dengan gradasi neon biru-ungu (inspirasi Stripe, Linear, Vercel). Bahasa Indonesia.

**Domain:** bcompbizsurakarta.com  
**Production:** /www/wwwroot/bcompbizsurakarta.com/  
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4

## Produk yang Ditampilkan

1. **Family Health AI** — Platform kesehatan preventif berbasis AI (health.khelmi.biz.id)
2. **Ahli Investasi** — Dashboard investasi real-time dengan multi-AI (trade.khelmi.biz.id)

## Skill Routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- UI/Component creation → invoke `frontend-design`
- Animation/motion → invoke `animate`
- SEO optimization → invoke `seo` or `claude-seo`
- Accessibility → invoke `accessibility`
- Code review → invoke `impeccable`
- Debug/bugs → invoke `investigate`
- Next.js questions → invoke `next-best-practices`

## Automatic Workflow

When building UI:
1. `frontend-design` for design direction
2. `animate` for interactions
3. `accessibility` for compliance

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # Run linter
```

## Conventions

- Use Tailwind CSS 4 for styling
- Follow Next.js App Router patterns
- Implement accessibility (WCAG 2.2)
- Add SEO meta tags to all pages
- Use TypeScript strictly
- Bahasa Indonesia untuk semua konten
