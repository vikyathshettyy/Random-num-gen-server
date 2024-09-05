const express = require('express');
const app = express();
const port = 3000;

// Route to handle GET request on root '/'
app.get('/', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
  res.send(`Random Number: ${randomNumber}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
