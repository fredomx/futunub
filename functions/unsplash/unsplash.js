const axios = require('axios');

exports.handler = async function(event, context) {
    try {
        const accessKey = 'Mly1tCrSXahH791GYEegmXpKaJo0ipL0Btf3ZBXB69A'; // Replace with your Unsplash API access key
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        const imageUrl = response.data.urls.regular;
        
        return {
            statusCode: 200,
            body: JSON.stringify({ imageUrl }),
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};
