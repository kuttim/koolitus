const express = require('express');

const app = express();

const port = 3000;

app.post('/contact', (req, res) => {
  res.send('Ping!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
