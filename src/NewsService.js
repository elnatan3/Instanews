import axios from 'axios';

export const fetchNews = async (category) => {
  const apiKey = "ND9a79963SBiUkPOFh1oa6agdrOLRjPzecXabEE6LfvbufWo";
  const language = 'en'; // specify English language
  const url = `https://api.currentsapi.services/v1/latest-news`;

  try {
    const response = await axios.get(url, {
      params: {
        apiKey: apiKey,
        category: category,
        language: language, // add the language parameter
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};