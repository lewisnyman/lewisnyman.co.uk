# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (runs eleventy serve + sass watch in parallel)
npm run watch

# Build (compile SCSS, then generate static site)
npm start

# Debug eleventy
npm run debug

# SCSS only
npm run sass
```

The output is written to `./serve/` (gitignored).

## Architecture

This is a personal blog/portfolio built with [Eleventy (11ty)](https://www.11ty.dev/). Source files live in `src/`, compiled output goes to `serve/`.

**Template hierarchy:**
- `src/_includes/layouts/default.html` — base layout (header/footer)
- `src/_includes/layouts/page.html` — extends default for static pages
- `src/_includes/layouts/post.html` — extends default, adds date/reading time

**Content:**
- `src/_posts/` — blog posts as markdown with YAML frontmatter
- `src/_data/site.json` — site metadata (name, URL, etc.)
- `src/_data/menu.json` — navigation items
- `src/index.md` — homepage

**Styling:**
SCSS source is in `src/assets/scss/`, organized with SMACSS principles: `variables/`, `abstractions/` (mixins), `base/`, `layouts/`, `components/`. Compiled to `src/assets/stylesheets/styling.css` (gitignored).

**Eleventy config** (`.eleventy.js`):
- Layout aliases: `post`, `page`, `default`
- Custom filters: `jsonify`, `readingTime`, `prettyDate`
- Responsive image plugin auto-resizes images from `src/` to `serve/` (320–900px range, lazy loaded)

**Deployment:** Netlify runs `npm run start` with `ELEVENTY_ENV=prod`.
