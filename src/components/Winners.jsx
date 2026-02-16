import React, { useState } from 'react';
import winnersData from './winnersData';
import PageHeader from './PageHeader'; 

const Winners = () => {
  const [selectedYear, setSelectedYear] = useState(2018);

  return (
    <>
      <PageHeader title="Победители" />
      <div className="winners-page">
        <h1 className="winners-title">
          Победители International <span className="highlight">IT Skills Competition</span> (2018-2024)
        </h1>
        <div className="years-nav">
          {Object.keys(winnersData).map((year) => (
            <button
              key={year}
              className={`year-button ${selectedYear === parseInt(year) ? 'active' : ''}`}
              onClick={() => setSelectedYear(parseInt(year))}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="winners-list">
          {winnersData[selectedYear].map((winner, index) => (
            <div key={index} className="winner-card">
              <h2 className="winner-category">{winner.category}</h2>
              {winner.name ? (
                <>
                  <p><strong>Имя:</strong> {winner.name}</p>
                  <p><strong>Страна:</strong> {winner.country}</p>
                  <p><strong>Проект:</strong> {winner.project}</p>
                  <p><strong>Профессиональные достижения:</strong> {winner.achievements}</p>
                </>
              ) : (
                <>
                  <p><strong>Название команды:</strong> {winner.teamName}</p>
                  <p><strong>Капитан команды:</strong> {winner.captain}</p>
                  <p><strong>Страна:</strong> {winner.country}</p>
                  <p><strong>Проект:</strong> {winner.project}</p>
                  <p><strong>Профессиональные достижения:</strong> {winner.achievements}</p>
                  <p><strong>Члены команды:</strong> {winner.members.join(', ')}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Winners;
