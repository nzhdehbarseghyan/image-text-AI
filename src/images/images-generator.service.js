const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
});
const openai = new OpenAIApi(configuration);

const generateImage = async (quantity, description, ) => {
    try {
        const completion = await openai.createImage({
            prompt: description,
            n: quantity,
            size: '1024x1024',
        })

        return completion.data;
    } catch(err) {
        return err;
    }
}


module.exports = {
    generateImage
}