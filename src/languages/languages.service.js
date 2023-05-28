const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY
})

const openai = new OpenAIApi(configuration);

const textCorrector = async (text)  => {
    try {
        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Please correct the text delimited by <>.
            <${text}>`,// TODO Give an explanation for the corrections you made.
        });

        return completion.data.choices[0].text;
    } catch(err) {
        return err;
    }
}

const textTranslator = async (text, language)  => {
    try {
        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Please translate the text delimited by triple backticks into ${language}.
            \`\`\`${text}\`\`\` `,
            max_tokens: 800,
            temperature: 0.6
        });

        return completion.data.choices[0].text;
    } catch(err) {
        return err;
    }
}

module.exports = {
    textCorrector,
    textTranslator
}