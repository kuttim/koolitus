const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.post('/api/add', (req, res) => {
  console.log(req.body);

  const answer = req.body.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
  res.send({ answer });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
