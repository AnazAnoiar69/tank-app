const express = require('express');
const app = express();

app.post('/api', (req, res) => {
  console.log(req.body); // handle incoming data
  res.sendStatus(200); // send a response
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const server = app.listen(3000, () => {
  console.log(`Server listening on port ${server.address().port}`);
});