const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const userRouters = require('./routers/user');
require('./database/mongoose');

app.use(express.json());
app.use(userRouters);

app.listen(port, () => console.log(`Server is up and running on port ${port}`));