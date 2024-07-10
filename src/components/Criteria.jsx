import React from 'react';
import PageHeader from './PageHeader'; 

const Criteria = () => {
  return (
    <>
    <PageHeader title="Критерии оценки" />
      
      <div className="criteria-page">
        <div className="criteria-content">
          <h2 className="criteria-title">Лучший разработчик программного обеспечения (Best Software Developer)</h2>
          <ul className="criteria-list">
            <li><strong>Качество кода:</strong> Чистота, читаемость и организация кода.</li>
            <li><strong>Инновационность решений:</strong> Уровень новизны и креативности предложенных решений.</li>
            <li><strong>Производительность:</strong> Оптимизация и эффективность программного обеспечения.</li>
            <li><strong>Масштабируемость:</strong> Возможность масштабирования приложения для работы с большими нагрузками.</li>
            <li><strong>Документация:</strong> Полнота и доступность документации к разработанному ПО.</li>
          </ul>

          <h2 className="criteria-title">Лучший специалист по базам данных (Best Database Specialist)</h2>
          <ul className="criteria-list">
            <li><strong>Проектирование базы данных:</strong> Эффективность и логичность структуры базы данных.</li>
            <li><strong>Оптимизация запросов:</strong> Скорость и эффективность SQL-запросов.</li>
            <li><strong>Безопасность данных:</strong> Реализация мер по защите данных.</li>
            <li><strong>Масштабируемость базы данных:</strong> Возможность базы данных справляться с увеличением объемов данных.</li>
            <li><strong>Документирование:</strong> Полнота и точность документации по структуре и использованию базы данных.</li>
          </ul>

          <h2 className="criteria-title">Лидер в области кибербезопасности (Cybersecurity Leader)</h2>
          <ul className="criteria-list">
            <li><strong>Углубленные знания:</strong> Понимание современных угроз и методов защиты.</li>
            <li><strong>Практическое применение:</strong> Способность эффективно применять знания в реальных сценариях.</li>
            <li><strong>Инновации в безопасности:</strong> Использование новаторских методов и технологий для обеспечения безопасности.</li>
            <li><strong>Комплексный подход:</strong> Умение интегрировать различные меры безопасности в общую стратегию.</li>
            <li><strong>Обучение и осведомленность:</strong> Вклад в повышение уровня осведомленности и обучения по вопросам безопасности среди коллег и широкой аудитории.</li>
          </ul>

          <h2 className="criteria-title">Лидер в разработке мобильных приложений (Mobile App Development Leader)</h2>
          <ul className="criteria-list">
            <li><strong>Пользовательский опыт (UX):</strong> Удобство и интуитивность интерфейса приложения.</li>
            <li><strong>Техническая реализация:</strong> Производительность и стабильность работы приложения.</li>
            <li><strong>Инновационность:</strong> Уникальность и новизна функций приложения.</li>
            <li><strong>Кроссплатформенность:</strong> Возможность работы приложения на различных операционных системах и устройствах.</li>
            <li><strong>Отзывчивость и адаптивность:</strong> Способность приложения адаптироваться к различным экранам и разрешениям.</li>
          </ul>

          <h2 className="criteria-title">Лучший командный проект (Best Team Project)</h2>
          <ul className="criteria-list">
            <li><strong>Слаженность работы команды:</strong> Эффективность командного взаимодействия и распределение ролей.</li>
            <li><strong>Качество выполнения проекта:</strong> Соответствие проекта заявленным требованиям и его завершенность.</li>
            <li><strong>Инновационность проекта:</strong> Уровень новаторства и оригинальности предложенного решения.</li>
            <li><strong>Влияние и значимость:</strong> Влияние проекта на индустрию или общество в целом.</li>
            <li><strong>Документация и презентация:</strong> Полнота документации и качество презентации проекта.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Criteria;
