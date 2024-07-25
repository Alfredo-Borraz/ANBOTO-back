import axios from 'axios';

const SENTIMENT_API_URL = 'http://127.0.0.1:5000/sentiment';

export const analyzeSentiment = async (text) => {
  try {
    const response = await axios.post(SENTIMENT_API_URL, { text });
    return response.data;
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw error;
  }
};
