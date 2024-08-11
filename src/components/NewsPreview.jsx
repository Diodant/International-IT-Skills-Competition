import React from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData';

const NewsPreview = () => {
  const previewArticles = articlesData.slice(0, 3);

  return (
    <div className="news-preview-section">
      <div className="news-preview-cards">
        {previewArticles.map((article) => (
          <div key={article.id} className="news-preview-card">
            <div className="news-preview-image-container">
              <img src={article.image} alt={article.title} className="news-preview-image" />
              <div className="news-preview-date">{article.date}</div>
            </div>
            <div className="news-preview-content">
              <div className="news-preview-category">
                <div>
                <i className="bi bi-bookmark icon"></i> 
                {article.category}
                </div>

                <div>
                <i className="bi bi-person-circle icon"></i>
                {article.author}
                </div>
              </div>
              <h2 className="news-preview-title">
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </h2>
              <p className="news-preview-text">{article.text}</p>
              <Link to={`/articles/${article.id}`} className="news-preview-more">Прочитать полностью</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPreview;
