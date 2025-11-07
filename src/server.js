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
app.get('/', (req, res) => res.send('Server is running!'));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
