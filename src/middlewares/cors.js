import cors from 'cors';

export const corsMiddleware = cors({
  origin: [
    'http://localhost:3000',
    'https://9-forestofstudy-1team.netlify.app',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
