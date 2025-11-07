import cors from 'cors';

export const corsMiddleware = cors({
  origin: [
    'http://localhost:3000',
    'https://nine-forestofstudy-1team-be.onrender.com',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
