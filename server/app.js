import express from 'express';
import api from './routes/api.js';

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '20kb' }));
app.use('/api', api);

export default app;
