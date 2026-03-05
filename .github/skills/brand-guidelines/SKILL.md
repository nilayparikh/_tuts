---
name: brand-guidelines
description: Applies LocalM™ Tuts brand rules from the _brand submodule. Use when editing logos, metadata icons, public brand assets, or visual identity.
license: Complete terms in LICENSE.txt
---

# LocalM™ Brand Guidelines

## Overview

Use this skill whenever work touches brand assets, logos, favicon/OG metadata, or visual identity.

## Source of Truth

- `_brand/localm_tuts_brands.svg` — master artboard
- `_brand/docs/BRAND_GUIDE.md` — canonical brand guide (single source)
- `_brand/dist/localm/` — generated SVGs + transparent PNGs

**All brand documentation lives in `_brand/docs/`.** Do not duplicate in `_tuts/docs/`.

## Consumer Model

`_tuts` copies **only the files actually referenced by app code** from `_brand/dist/localm/`
directly into `public/brand/` (flat — no `localm/` subfolder).

Referenced files: see `public/brand/README.md` for the complete list.

## Workflow

1. Edit artwork in `_brand/localm_tuts_brands.svg`.
2. Regenerate:

```powershell
python _brand/scripts/generate_localm_brand_assets.py
```

3. Copy only needed files into `public/brand/` (see sync script in `public/brand/README.md`).
4. Commit both `_brand` pointer and `public/brand/` files.

## Rules

- Do not distort, skew, or recolor logos.
- Do not introduce ad-hoc brand colors — use `_brand/docs/BRAND_GUIDE.md` tokens.
- Do not dump the entire `_brand/dist/` into the consumer repo.
- SVGs are transparent (except `og-image-template`). PNGs are transparent.
- Keep `layout.tsx`, `manifest.webmanifest`, and `site.ts` icon paths pointing to `public/brand/`.
- Use `<BrandLockup>` component from `@localm/tutorial-framework` — never inline brand styles:
  - Sizes: `sm` (footer), `md` (header), `lg` (splash)
  - `localm`: Share Tech Mono (primary), `TM`: superscript Outfit weight 600, `TUTS`: Outfit Light (secondary)
  - Fallbacks for non-brand content: Mono `Consolas, Courier New, monospace`; Sans `Segoe UI, Roboto, Arial, sans-serif`
- Footer: 3-column grid — copyright + links (left), brand lockup (center), social icons (right).
- Primary CTA buttons: blue→purple gradient, pill shape, glow shadow.
