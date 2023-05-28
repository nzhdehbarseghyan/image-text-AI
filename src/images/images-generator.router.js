const { Router } = require('express');
const path = require('path');
const router = Router();

const { imageGenerator } = require(path.join(__dirname, 'images-generator.controller.js'));

router.post('/generate', imageGenerator);

module.exports = router;
