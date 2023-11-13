import axios from 'axios';

export const fetchNews = async (category) => {
  try {
    const response = await axios.get(`https://backend-instanews.vercel.app/news/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};
