const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port} and starting at  http://localhost:${port}`);
});