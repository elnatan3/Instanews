import React from 'react';

function NewsDisplay({ articles }) {
  // Check if articles is defined and is an array
  if (!Array.isArray(articles)) {
    return <div>Loading...</div>; // or any other loading or error state representation
  }

  return (
    <div className="news-container">
      {articles.map((article) => (
        <div key={article.id} className="news-article">
          {article.image && article.image !== 'None' && <img src={article.image} alt={article.title} />}
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          <p className="published-date">{new Date(article.published).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsDisplay;
