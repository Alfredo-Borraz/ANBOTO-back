import axios from 'axios';

const SENTIMENT_API_URL = 'https://analisis-sentimiento.onrender.com/sentiment';

export const analyzeSentiment = async (text) => {
  try {
    const response = await axios.post(SENTIMENT_API_URL, { text });
    return response.data;
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw error;
  }
};
