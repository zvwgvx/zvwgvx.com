# zvwgvx.com

Personal research and engineering website of Giang Truong Vu (Zang Vu / @zvwgvx).

Built with Astro, TypeScript and MDX. The site prioritizes readable research notes, technical writing, and accurate project documentation.

## Development

Requires Node.js 24 or newer.

```sh
npm install
npm run dev
```

For production:

```sh
npm run build
npm run preview
```

## Deployment

Cloudflare Pages: build command `npm run build`, output directory `dist`, environment `NODE_VERSION=24`. Point the custom domain `zvwgvx.com` to the Pages deployment after reviewing the generated site.

## Content

Project descriptions are in `src/data/projects.ts`. Layout, navigation and metadata live in `src/layouts/BaseLayout.astro`. Global design tokens are in `src/styles/global.css`.
