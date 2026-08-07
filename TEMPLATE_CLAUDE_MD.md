# CLAUDE.md - Auto-Load All Skills

Copy file ini ke root project Anda sebagai `CLAUDE.md`. File ini akan membuat semua skill otomatis ter-load dan terpakai sesuai konteks pekerjaan.

---

## Skill Routing Rules

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

### Design & UI

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "buat halaman", "desain UI", "build component", "landing page" | `frontend-design` | Membuat UI baru yang premium & distinctive |
| "review desain", "audit UI", "cek tampilan" | `impeccable` | Polish & refine existing UI |
| "desain premium", "high-end", "luxury" | `high-end-visual-design` | Standar desain premium |
| "redesign", "upgrade desain", "modernisasi" | `redesign-existing-projects` | Upgrade existing ke premium |
| "desain minimalis", "clean", "editorial" | `minimalist-ui` | Clean editorial interfaces |
| "brand", "logo", "identity" | `brandkit` | Brand identity generation |
| "mockup", "gambar UI", "preview desain" | `imagegen-frontend-web` | Generate design references |
| "mobile app", "iOS design", "Android" | `imagegen-frontend-mobile` | Mobile app mockups |
| "gambar jadi kode", "screenshot to code" | `image-to-code` | Convert image to working code |

### Animation & Motion

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "animasi", "animasi scroll", "hover effect", "transisi" | `animate` | Build animations from scratch |
| "audit animasi", "improve motion", "perbaiki animasi" | `improve-animations` | Audit & improve existing animations |
| "review animasi", "cek animasi" | `review-animations` | Review animation code quality |
| "cari yang bisa dianimasi" | `find-animation-opportunities` | Find animation candidates |
| "Apple style", "iOS motion", "spring animation" | `apple-design` | Apple-style fluid motion |
| "apa nama efek ini" | `animation-vocabulary` | Reverse-lookup animation terms |

### SEO & Search

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "SEO", "audit SEO", "optimize search" | `seo` | SEO optimization dasar |
| "full SEO audit", "comprehensive SEO" | `claude-seo` | Comprehensive SEO dengan 25 sub-skills |
| "technical SEO", "crawlability", "indexability" | `seo-technical` | Technical SEO audit |
| "content quality", "E-E-A-T", "artikel SEO" | `seo-content` | Content quality analysis |
| "schema", "structured data", "JSON-LD" | `seo-schema` | Schema.org markup |
| "AI search", "GEO", "AEO", "AI Overview" | `seo-geo` | AI search optimization |
| "local SEO", "Google Business", "GBP" | `seo-local` | Local SEO optimization |
| "backlink", "link building" | `seo-backlinks` | Backlink analysis |
| "sitemap", "robots.txt" | `seo-sitemap` | Sitemap management |
| "image SEO", "alt text", "image optimize" | `seo-images` | Image optimization |
| "international SEO", "hreflang", "multi-language" | `seo-hreflang` | International SEO |
| "ecommerce SEO", "product schema" | `seo-ecommerce` | E-commerce SEO |

### Next.js & React

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "Next.js", "app router", "server component" | `next-best-practices` | Next.js best practices |
| "cache", "PPR", "cacheLife" | `next-cache-components` | Cache components |
| "upgrade Next.js", "migrate Next.js" | `next-upgrade` | Next.js upgrade guide |
| "React", "component", "performance" | `react-best-practices` | React optimization |
| "compound component", "composition" | `composition-patterns` | React composition |

### TypeScript

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "TypeScript", "type", "generic", "utility type" | `typescript-advanced-types` | Advanced TypeScript |
| "Node.js", "backend", "API" | `nodejs-backend-patterns` | Node.js backend |
| "Node.js best practice" | `nodejs-best-practices` | Node.js principles |

### Accessibility

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "accessibility", "a11y", "WCAG", "screen reader" | `accessibility` | WCAG 2.2 compliance |

### Codebase Analysis

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "knowledge graph", "analisis codebase", "arsitektur" | `graphify` | Knowledge graph generation |
| "buat skill baru", "create skill" | `skill-creator` | Create new skills |

### Quality & Testing

| Trigger | Skill | Kapan Digunakan |
|---------|-------|-----------------|
| "QA", "test", "testing" | `qa` | Systematic QA testing |
| "debug", "bug", "error", "investigate" | `investigate` | Debugging & root cause |
| "review code", "PR review" | `review` | Code review |
| "deploy", "ship", "release" | `ship` | Ship workflow |
| "spec", "specification", "requirements" | `spec` | Spec generation |

---

## Automatic Skill Activation

### When Building UI Components
1. First: `frontend-design` for design direction
2. Then: `animate` for interactions
3. Finally: `accessibility` for compliance

### When Doing SEO Work
1. First: `seo` or `claude-seo` for audit
2. Then: `seo-technical` for technical fixes
3. Then: `seo-content` for content optimization
4. Finally: `seo-schema` for structured data

### When Reviewing Existing Code
1. First: `impeccable` for UI review
2. Then: `improve-animations` for motion review
3. Then: `accessibility` for a11y review
4. Finally: `seo` for SEO check

### When Starting New Project
1. First: `graphify` to analyze codebase
2. Then: `spec` if requirements unclear
3. Then: `frontend-design` for UI
4. Finally: `seo` for optimization

---

## Example Prompts (Auto-Trigger Skills)

```
User: "Buat halaman landing page untuk product SaaS"
→ Auto: frontend-design + animate + accessibility

User: "Audit SEO website ini"
→ Auto: seo + seo-technical + seo-content + seo-schema

User: "Perbaiki animasi di halaman utama"
→ Auto: improve-animations + animate

User: "Buat component testimonial yang premium"
→ Auto: frontend-design + animate + accessibility

User: "Review desain halaman blog"
→ Auto: impeccable + design-review

User: "Buat knowledge graph dari project ini"
→ Auto: graphify

User: "Optimasi website untuk AI search"
→ Auto: seo-geo + seo-content

User: "Buat mobile app mockup"
→ Auto: imagegen-frontend-mobile + frontend-design

User: "Upgrade Next.js ke versi terbaru"
→ Auto: next-upgrade + next-best-practices

User: "Buat animasi scroll yang smooth"
→ Auto: animate + apple-design
```

---

## Notes

- Skills are auto-discovered from `.claude/skills/` and `.config/opencode/skills/`
- No manual registration needed
- Skills activate based on keyword matching in user prompts
- Multiple skills can be activated for a single task
- Use `/skill-name` to explicitly invoke a skill

---

## Quick Reference - Skill Locations

```
Global Skills:
  C:\Users\INTEL\.claude\skills\
  C:\Users\INTEL\.config\opencode\skills\

Project-Specific Skills:
  <project-root>\.claude\skills\

Skill Documentation:
  <skill-folder>\SKILL.md
```
