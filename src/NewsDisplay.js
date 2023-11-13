import React from 'react';

function NewsDisplay({ articles }) {
  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div key={index} className="news-article">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
}

export default NewsDisplay;
