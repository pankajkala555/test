'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
  res.send('Hello World ');
=======
  res.send('Hello World ');
>>>>>>> dev
=======
  res.send('Hello World');
>>>>>>> parent of 0130041 (commit dev)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);