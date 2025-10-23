import express from 'express';
import router from './routes/index.js'; 

const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/', router);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
