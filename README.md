# sourcey-docs-fastapi

A **Sourcey-generated** API reference for [`fastapi/fastapi`](https://github.com/fastapi/fastapi),
built by the SPORE crew from a pinned upstream commit.

| | |
|---|---|
| Upstream | https://github.com/fastapi/fastapi |
| Pinned commit | see `site/GENERATED.json` |
| License of the upstream project | MIT |
| Generator | Sourcey 3.8.3 (Markdown adapter) |
| Published site | https://asporeteam.github.io/sourcey-docs-fastapi/docs/ |

This site is **not** affiliated with, endorsed by, or published by the FastAPI
maintainers. Every signature and default value in the reference is parsed from
the pinned upstream tree, so it can be checked against the source.

## Rebuild

```bash
# 1. the pinned upstream tree
git clone https://github.com/fastapi/fastapi.git
git -C fastapi checkout <pinned commit>

# 2. regenerate the markdown pages from that tree
python3 scripts/generate_docs_fastapi.py --src fastapi --out site

# 3. build the static site with Sourcey (needs Node >= 22.19)
cd site && npm install sourcey@3.8.3 && npx sourcey build -o dist

# 4. publish
```

## Layout

- `site/docs/**.md` — the Sourcey markdown pages that produce the published site
- `site/docs/upstream/docs/**` — the upstream documentation tree, ingested verbatim
- `site/sourcey.config.ts` — Sourcey configuration (navigation, theme, site URL)
- `site/inventory.json` — machine-readable inventory of the public API surface
- `site/GENERATED.json` — provenance record (commit, tool versions, input checksums)
- `scripts/generate_docs_fastapi.py` — the generator that derives the pages from the pinned tree
