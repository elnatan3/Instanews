import axios from 'axios';

const API_KEY = 'a422825d9b7644fd91f1b20cc4133d13'; // Replace with your API key

export const fetchNews = async (category) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`);
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
