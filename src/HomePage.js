import React, { useState, useEffect } from 'react';
import NewsDisplay from './NewsDisplay';
import { fetchNews } from './NewsService';

function HomePage() {
    const [articles, setArticles] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      // Fetch the latest news on component mount
      fetchNews().then(news => {
        const uniqueArticles = filterUniqueArticles(news.news);
        setArticles(uniqueArticles);
      });
    }, []);

    const filterUniqueArticles = (articles) => {
      const seen = new Set();
      return articles.filter(article => {
        const duplicate = seen.has(article.title);
        seen.add(article.title);
        return !duplicate;
      });
    };

    return (
      <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
        <header className="header">
          <h1>Insta News</h1>
          <p className="tagline">All in one news - Making it easy to access latest news instantly</p>
          <div className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌙' : '☀️'}
          </div>
        </header>
        
        {/* ... rest of your code */}
        
        <NewsDisplay articles={articles} />
        
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} All Rights Reserved. Elnatan Tesfa</p>
          </div>
        </footer>
      </div>
    );
}

export default HomePage;
