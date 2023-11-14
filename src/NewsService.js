import axios from 'axios';

export const fetchNews = async (category) => {
  const apiKey = "ND9a79963SBiUkPOFh1oa6agdrOLRjPzecXabEE6LfvbufWo";
  const url = `https://api.currentsapi.services/v1/latest-news`;

  try {
    const response = await axios.get(url, {
      params: {
        apiKey: apiKey,
        category: category,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};
