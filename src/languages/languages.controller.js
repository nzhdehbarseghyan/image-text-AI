const path = require('path');

const textCorrectorService = require(path.join(__dirname, 'languages.service.js'));

/**
 * Check and correct the text
 *
 * @param {import('express').Request<{}, {}, showRequestBody, showRequestQuery>} req
 * @param {import('express').Response} res
 * @param {string} req.body.text - The text should be corrected
 * @param {string} req.body.language - The language in which the text should be corrected
 * @returns {string} Corrected text
 * */
const textCorrector = async (req, res) => {
    try {
        const correctedText = await textCorrectorService.correctText(req.body.text);

        res.status(200).send({
            message: 'Success',
            data: correctedText
        });
    } catch (err) {
        if (err.response) {
            res.status(err.response.status).send({ message: 'Failed', data: err.response.data });
        }

        res.status(404).send({ message: 'Failed', data: err.message });
    }
}

/**
 * Translate the text into the given language
 *
 * @param {import('express').Request<{}, {}, showRequestBody, showRequestQuery>} req
 * @param {import('express').Response} res
 * @param {string} req.body.text - The text should be corrected
 * @param {string} req.body.language - The language in which the text should be corrected
 * @returns {string} Translated text
 * */
const languageTranslator = async (req, res) => {
    try {
        const { text, language } = req.body;
        const translatedText = await textCorrectorService.textTranslator(text, language);

        res.status(200).send({
            message: 'Success',
            data: translatedText
        });
    } catch (err) {
        if (err.response) {
            res.status(err.response.status).send({ message: 'Failed', data: err.response.data });
        }

        res.status(404).send({ message: 'Failed', data: err.message });
    }
}

module.exports = {
    textCorrector,
    languageTranslator
}
