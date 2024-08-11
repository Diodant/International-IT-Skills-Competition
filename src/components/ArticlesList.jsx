import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 
import PageHeader from './PageHeader';

const ArticlesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <>
    <PageHeader title="Статьи" />
    <div className="articles-page">
      <div className="articles-container">
        {articlesData.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-image-container">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-date-badge">{article.date}</div>
            </div>
            <div className="article-content">
              <div className="article-info">
                <div className='article-category-cont'>
                <h3 className="article-category">
                  <i className="bi bi-bookmark icon"></i> 
                  {article.category}
                </h3>
                <h3 className="article-category"> 
                <i className="bi bi-person-circle icon"></i>
                {article.author}
                </h3>
                </div>
                <h2 className="article-title"><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
                <div className="article-text">{article.text}</div>
            
              </div>
              <Link to={`/articles/${article.id}`} className="article-read-more">Прочитать полностью</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ArticlesList;
