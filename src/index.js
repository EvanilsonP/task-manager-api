const express = require('express');
const port = 3000;
const app = express();
const mongoose = require('./database/mongoose');

app.use(express.json());

app.listen(port, () => console.log(`Server is up and running on port ${port}`));