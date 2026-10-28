# SV Groups website

React (Vite + React Router) frontend with a Node.js (Express) API.

```
client/   React app — pages in src/pages, shared UI in src/components
server/   Express API — data in server/data, routes in server/routes/api.js
api/      Vercel serverless entry (wraps server/app.js)
old-static-site/  previous HTML version, kept for reference
```

## Run locally

```
npm install
npm run dev      # React on http://localhost:5173, API on http://localhost:5000
```

Production build served by Node:

```
npm run build
npm start        # http://localhost:5000
```

## API

| Method | Path | |
|---|---|---|
| GET | /api/projects | all projects |
| GET | /api/projects/:slug | one project (`sv-polaris`, `sv-grandur`) |
| GET | /api/gallery | completed-project images |
| GET | /api/testimonials?limit=3 | customer reviews |
| POST | /api/enquiries | enquiry form (`name`, `mobile`, `email`, `service`, `message`) |

Enquiries are appended to `server/data/enquiries.jsonl`. To have them emailed, copy
`.env.example` to `.env` and fill in the SMTP settings.

## Deploy to Vercel

`vercel.json` is already configured (build → `client/dist`, `/api/*` → Express function,
old `.html` URLs redirect to the new routes). Run `vercel --prod`.

On Vercel the filesystem is not persistent, so set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASS` and `ENQUIRY_TO` in the project's Environment Variables to receive enquiries.
