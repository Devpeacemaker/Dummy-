const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🕶️ Peace Bot Is Live... but this is just a test!');
});

app.listen(port, () => {
  console.log(`Fake PEACE-MD bot running on port ${port}`);
});
