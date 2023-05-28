const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv').config();
const PORT = process.env.PORT || 4500;

const languagesRouterPath = path.join(__dirname, 'src', 'languages', 'languages.router.js');
const languagesRouter = require(languagesRouterPath);
const imagesRouterPath = path.join(__dirname, 'src', 'images', 'images-generator.router.js');
const imagesRouter = require(imagesRouterPath);

const app = express();
app.use(bodyParser.json());
app.use('/language', languagesRouter);
app.use('/images', imagesRouter);

app.listen(PORT, () => console.log(`Server is listening in http://localhost:${PORT}`));
