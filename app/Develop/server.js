const express = require('express');
const apiRoutes = require('../Develop/routes/apiRoutes');
const htmlRoutes = require('../Develop/routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);