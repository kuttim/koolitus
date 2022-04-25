const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());

/**
 * Enable cors
 */

app.use(
  cors({
    origin: '*',
  })
);
app.post('/api/add', (req, res) => {
  console.log('minu pihta toimub päring', req.body);
  res.header({
    'Content-Type': 'application/json',
  });
  res.json({ answer: 0 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
