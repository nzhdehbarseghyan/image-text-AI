const { Router } = require('express');
const path = require('path');
const router = Router();

const { textCorrector, languageTranslator } = require(path.join(__dirname, 'languages.controller.js'));

router.post('/correct', textCorrector);
router.post('/translate', languageTranslator);

module.exports = router;
