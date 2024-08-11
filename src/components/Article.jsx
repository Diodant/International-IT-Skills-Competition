import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articlesData';
import PageHeader from './PageHeader';

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const article = articlesData.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index} className="article-paragraph">{block.text}</p>;
        case 'header':
          return <h5 key={index} className="article-header">{block.text}</h5>;
        case 'image':
          return <img key={index} src={block.src} alt={block.alt} className="article-page-image" />;
        default:
          return null;
      }
    });
  };

  return ( 
    <>
    <PageHeader title="Статьи" />
    <div className="article-container">
      <div className="article-page">
        <h1 className="article-page-title">{article.title}</h1>
        <div className="article-meta">
          <span className="article-date"><i className="bi bi-calendar icon"></i>{article.date}</span>
          <span className="article-author"> | <i className="bi bi-person-circle icon"></i>{article.author}</span>
        </div>
        <img src={article.image} alt={article.title} className="article-page-image" />
        <div className="article-page-content">
          {renderContent(article.content)}
        </div>
      </div>
    </div>
    </>
  );
};

export default Article;
