import axios from 'axios';

// Access the API key from environment variables
const API_KEY = process.env.NEWS_API_KEY;

export const fetchNews = async (category) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
    }
};
