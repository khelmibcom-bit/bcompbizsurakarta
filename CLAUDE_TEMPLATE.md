# CLAUDE.md

## Project Overview

[Deskripsi project Anda di sini]

## Skill Routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- UI/Component creation → invoke `frontend-design`
- Animation/motion → invoke `animate`
- SEO optimization → invoke `seo` or `claude-seo`
- Accessibility → invoke `accessibility`
- Code review → invoke `impeccable`
- Debug/bugs → invoke `investigate`
- Knowledge graph → invoke `graphify`
- Design review → invoke `design-review`
- Next.js questions → invoke `next-best-practices`
- React optimization → invoke `react-best-practices`
- TypeScript → invoke `typescript-advanced-types`
- Ship/deploy → invoke `ship`

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run lint         # Run linter
npm run test         # Run tests
```

## Conventions

- Use CSS Modules for styling
- Follow Next.js App Router patterns
- Implement accessibility (WCAG 2.2)
- Add SEO meta tags to all pages
- Use TypeScript strictly

## Automatic Workflow

When building UI:
1. `frontend-design` for design direction
2. `animate` for interactions
3. `accessibility` for compliance

When doing SEO:
1. `seo` for audit
2. `seo-technical` for technical fixes
3. `seo-content` for content
4. `seo-schema` for structured data

When reviewing:
1. `impeccable` for UI
2. `improve-animations` for motion
3. `accessibility` for a11y
