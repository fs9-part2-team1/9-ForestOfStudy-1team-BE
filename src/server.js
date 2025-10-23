import express from 'express';
import { indexRouter } from './routes/index.js';

const app = express();
const PORT = 3000;

// JSON 파싱 미들웨어
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
