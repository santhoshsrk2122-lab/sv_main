import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import app from './app.js';
import { legacyRedirects } from './legacyRedirects.js';

const dist = join(dirname(fileURLToPath(import.meta.url)), '../client/dist');
const PORT = process.env.PORT || 5000;

// Serve the built React app when it exists (production); in development Vite serves it.
if (existsSync(dist)) {
  app.use((req, res, next) => {
    const to = legacyRedirects[req.path];
    to ? res.redirect(301, to) : next();
  });
  app.use(express.static(dist));
  app.get(/^(?!\/api\/).*/, (req, res) => res.sendFile(join(dist, 'index.html')));
}

app.listen(PORT, () => console.log(`SV Groups server running on http://localhost:${PORT}`));
