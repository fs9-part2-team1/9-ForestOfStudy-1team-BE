import cors from 'cors';

export const corsMiddleware = cors({
  origin: '*', // 모든 요청 허용 (개발용)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});
