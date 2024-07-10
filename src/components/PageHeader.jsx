import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title }) => {
  return (
    <div className="page-header-container">
      <h1 className="page-header-title">{title}</h1>
      <div className="page-header-breadcrumbs">
        <Link to="/"><i className='flaticon-home home-icon'></i>ГЛАВНАЯ</Link> &gt; {title.toUpperCase()}
      </div>
    </div>
  );
};

export default PageHeader;
