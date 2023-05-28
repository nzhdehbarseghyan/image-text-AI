const path = require('path');

const imagesGeneratorService = require(path.join(__dirname, 'images-generator.service.js'));

/**
 * Generate an image by given description
 *
 * @param {import('express').Request<{}, {}, showRequestBody, showRequestQuery>} req
 * @param {import('express').Response} res
 * @param {string} req.body.description - The description to generate an image
 * @param {number} req.body.quantity - Number of images to be generated
 * @returns {string} Corrected text
 * */
const imageGenerator = async (req, res) => {
    try {
        const { quantity, description } = req.body;
        const generatedData = await imagesGeneratorService.generateImage(quantity, description);

        res.status(200).send({
            message: 'Success',
            data: generatedData
        });
    } catch (err) {
        if (err.response) {
            res.status(err.response.status).send({ message: 'Failed', data: err.response.data });
        }

        res.status(404).send({ message: 'Failed', data: err.message });
    }
}

module.exports = {
    imageGenerator
}