const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello DevOps!');
});

app.listen(port, () => {
    const now = new Date();
  console.log(`[${now.toISOString()}] Server started successfully.`);
  console.log(`App running at http://localhost:${port}`);
});