
import express from 'express';
import router from './routes/index.js';
import { corsMiddleware } from './middlewares/cors.js';
import { logger } from './middlewares/logger.js';
import { requestTimer } from './middlewares/requestTimer.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = 3000;

app.use(express.json());

//  전역 미들웨어
app.use(corsMiddleware);
app.use(logger);
app.use(requestTimer);

// 라우터
app.use('/', router);



//  
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
