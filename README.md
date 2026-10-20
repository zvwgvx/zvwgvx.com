# zvwgvx.com

Personal research and engineering website of Vu Truong Giang (Zang Vu / @zvwgvx).

Astro + TypeScript + MDX, deployed as pre-rendered static assets on **Cloudflare Workers**. No server-side Worker code or Cloudflare Astro adapter is required.

## Development

Use Node.js 24.

```sh
npm install
npm run dev
```

Production build and local Astro preview:

```sh
npm run build
npm run preview
```

Test against Cloudflare's local runtime:

```sh
npm run preview:cloudflare
```

## Cloudflare Workers deployment

The project uses **Workers Static Assets**, configured in `wrangler.toml`:

- Worker name: `zvwgvx-site`
- Assets: `dist/`
- Static page routing: Astro directory indexes with trailing slashes
- Missing pages: custom `404.html`
- No adapter, backend server or exposed API keys

### Recommended: Cloudflare Workers Builds + GitHub

1. Add `zvwgvx.com` as a Cloudflare DNS zone and ensure the zone becomes **Active**. If registered elsewhere, update its nameservers with your registrar first.
2. In [Cloudflare Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages), choose **Create application** and connect **GitHub**.
3. Select the `zvwgvx/zvwgvx.com` repository and production branch `main`.
4. Use `zvwgvx-site` as the Worker name, matching `wrangler.toml`.
5. Use these build settings:
   - Root directory: repository root
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Node.js: 24
6. Deploy and test the Cloudflare-provided `*.workers.dev` URL.
7. In the Worker dashboard, go to **Settings → Domains & Routes → Add → Custom Domain** and attach `zvwgvx.com`. Cloudflare handles DNS and TLS for the Worker once the zone is active. If an existing DNS record conflicts with this host, resolve that record before attaching it.

Workers Builds deploys automatically when changes land on `main`. Do not configure a second GitHub Actions deployment workflow unless you deliberately disable Workers Builds to avoid competing deployments.

### Alternative: manual Wrangler deployment

Authenticate on your own computer:

```sh
npx wrangler login
npm run deploy
```

The custom domain is set up separately in the Cloudflare dashboard. Never commit API tokens, account secrets or `.env` files.

### Validation

```sh
npm run check
npm run build
npm run check:cloudflare
```

The GitHub Actions Build workflow validates the same Wrangler configuration without deploying.

## Content

Project descriptions are in `src/data/projects.ts`. Layout, navigation and metadata live in `src/layouts/BaseLayout.astro`. Global design tokens are in `src/styles/global.css`.

## Updating the homepage

The **Latest updates** section is powered by `src/data/updates.ts`.

- Add awards and distinctions to the `honors` array. They automatically appear in the CV and dated news timeline.
- Add other news and project milestones to `announcements` with a date and category.
- All updates are sorted newest first. The homepage displays the first three, and `/updates/` displays the full timeline.
- The default site theme is dark, with an optional light-mode switch and a stored visitor preference.

Example:

```ts
{
  period: "2026-11",
  category: "Research",
  title: "A research milestone",
  summary: "Optional summary",
  url: "/work/aelia/"
}
```

Dates use `YYYY-MM` format. The UI displays dates as, for example, `Nov 2026`, without inventing an exact day. Supported categories are `Award`, `Selection`, `Distinction`, `Research`, `Engineering`, `Writing`, and `Announcement`.

The Codeforces link uses the distinct username `zvwg.vx`, not the GitHub handle `zvwgvx`. Updates pushed to `main` can automatically deploy through Cloudflare Workers Builds when enabled.
