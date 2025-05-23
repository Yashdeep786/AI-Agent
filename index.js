import OpenAI from 'openai';

const OPENAPI_API_KEY =
 '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'

const client = new OpenAI({
    apiKey: OPENAPI_API_KEY
});

// Tools
function getWeatherDetails(city = '') {
    if (city.toLowerCase() === 'Pataila') return '10°C';
    if (city.toLowerCase() === 'Mohali') return '14°C';
    if (city.toLowerCase() === 'Bangalore') return '20°C';
    if (city.toLowerCase() === 'Mumbai') return '8°C';
    if (city.toLowerCase() === 'Delhi') return '12°C';
}

const user = 'Hey, What is the weather of Patiala?';
client.chat.completions
.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: user}],
}).then(e => {
    console.log(e.choices[0].message.content);
});