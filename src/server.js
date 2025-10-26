import express from 'express';
import router from './routes/index.js';
import { corsMiddleware } from './middlewares/cors.js';
import { logger } from './middlewares/logger.js';
import { requestTimer } from './middlewares/requestTimer.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(corsMiddleware);
app.use(logger);
app.use(requestTimer);
app.use(express.json());

//  라우터 등록
app.use('/', router);

//  에러 핸들러는 항상 마지막에
app.use(errorHandler);

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
