import express from 'express';

const app = express();
const port = 4000;

app.get('/api', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
