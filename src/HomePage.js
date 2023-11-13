import React, { useState, useEffect } from 'react';
import NewsDisplay from './NewsDisplay';
import { fetchNews } from './NewsService';

const categories = [
    { name: 'technology', imageUrl: '/images/technology.jpg' }, // replace with your image paths
    { name: 'sports', imageUrl: '/images/sports.jpg' },
    { name: 'business', imageUrl: '/images/business.jpg' },
    { name: 'entertainment', imageUrl: '/images/entertainment.jpg' },
    { name: 'health', imageUrl: '/images/health.jpg' },
    { name: 'science', imageUrl: '/images/science.jpg' },
    { name: 'politics', imageUrl: '/images/politics.jpg' }
  ];

// const categories = ['technology', 'sports', 'business', 'entertainment', 'health', 'science'];

function HomePage() {
    const [articles, setArticles] = useState([]);
  
    const handleCategoryClick = (category) => {
      fetchNews(category.name).then(setArticles);
    };
  
    return (
      <div className="home-container">
        <header className="header">
          <h1>Insta News</h1>
          <p className="tagline">All in one news - Making it easy to access your favorite news</p>
        </header>
        <div className="categories-section">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className="category-button" 
              onClick={() => handleCategoryClick(category)}
              style={{ backgroundImage: `url(${category.imageUrl})` }}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </button>
          ))}
        </div>
        <NewsDisplay articles={articles} />
        <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved. Elnatan Tesfa</p>
          <div className="footer-links">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href="#" // Replace # with your actual link if needed
                onClick={() => handleCategoryClick(category)}
              >
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </footer>
      </div>
    );
  }
  
  export default HomePage;