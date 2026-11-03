# Sam Evans portfolio

Next.js 16, React 19, Tailwind CSS v4, BoardUI components (copied in as source under `components/`, MIT).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things are

- `app/content.ts` — every piece of copy, the box-score numbers, the lineup stories, the work table, career, LiftFlow. Edit here, not in the layout.
- `app/page.tsx` — page layout.
- `components/site/` — the custom pieces: `field.tsx` (court lines that draw in on load), `box-score.tsx` (counters), `lineup.tsx` (the six sports objects and their stories).
- `components/base/`, `components/application/`, `styles/`, `utils/` — BoardUI. Add more with `npx boardui@latest add <name>`.
- `public/sam.png` — headshot. Drop `Sam-Evans-Resume.pdf` in `public/` for the resume button.

## Logos

The lineup logos are loaded straight from ncaa.org, nascar.com, teamworks.com and liftflow.io. To self-host, save each file into `public/logos/` and change the `logo` paths in `app/content.ts`.

## Deploy

Push to GitHub and import into Vercel. No environment variables needed.
