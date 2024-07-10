import React from 'react';
import PageHeader from './PageHeader'; 
import UsImg from '../img/why-choose-us.png';

const AboutPage = () => {
  return (
    <div >
      <PageHeader title="О чемпионате" />
    <div className="about-page">
      <div className="about-section">
        <h1 className="about-title">International <span className="highlight">IT Skills Competition</span>: Престижный чемпионат IT-специалистов</h1>
        <p className="about-text">International IT Skills Competition — это международный чемпионат, объединяющий выдающихся IT-специалистов из всех стран СНГ. Это событие, проводимое ежегодно с 1 по 17 апреля с 2019 года, стало синонимом высочайших стандартов профессионализма и инноваций в IT-сфере. Чемпионат является платформой, где лучшие умы IT-индустрии демонстрируют свои исключительные навыки и решения, подтверждая свой статус на международной арене.</p>
        <h3 className="about-subtitle">Номинации:</h3>
        <div className="services-cards">
          <div className="service-card">
            <i className="flaticon-web-development service-icon"></i>
            <h3 className="service-title">Best Software Developer</h3>
            <p className="service-description">Лучший разработчик программного обеспечения (Best Software Developer)</p>
          </div>
          <div className="service-card">
            <i className="flaticon-database service-icon"></i>
            <h3 className="service-title">Best Database Specialist</h3>
            <p className="service-description">Лучший специалист по базам данных (Best Database Specialist)</p>
          </div>
          <div className="service-card">
            <i className="flaticon-security service-icon"></i>
            <h3 className="service-title">Cybersecurity Leader</h3>
            <p className="service-description">Лидер в области кибербезопасности (Cybersecurity Leader)</p>
          </div>
          <div className="service-card">
            <i className="flaticon-phone-call service-icon"></i>
            <h3 className="service-title">Mobile App Development Leader</h3>
            <p className="service-description">Лидер в разработке мобильных приложений (Mobile App Development Leader)</p>
          </div>
          <div className="service-card">
            <i className="flaticon-project-management service-icon"></i>
            <h3 className="service-title">Best Team Project</h3>
            <p className="service-description">Лучший командный проект (Best Team Project)</p>
          </div>
        </div>
        <h3 className="about-subtitle">Почему стоит участвовать?</h3>
        <div className="about-choose-us-section">
        <div className="why-choose-us-content">
          <div className="why-choose-us-items">
            <div className="why-choose-us-item">
              <h3 className="why-choose-us-number">01.</h3>
              <div lassName="why-choose-us-sub-item">
              <h3 className="why-choose-us-item-title">Мировое признание</h3>
              <p className="why-choose-us-item-description"> Участвуя в этом чемпионате, вы получите возможность соревноваться с лучшими IT-талантами из стран СНГ, что не только повышает ваш профессиональный статус, но и приносит вам международное признание.</p>
              </div>
            </div>
            <div className="why-choose-us-item">
              <h3 className="why-choose-us-number">02.</h3>
              <div lassName="why-choose-us-sub-item">
              <h3 className="why-choose-us-item-title">Престижная платформа</h3>
              <p className="why-choose-us-item-description">International IT Skills Competition — одно из самых престижных соревнований в IT-сфере. Будучи его участником, вы становитесь частью элитной группы профессионалов, известных своими достижениями и высокой экспертизой. </p>
              </div>
            </div>
            <div className="why-choose-us-item">
              <h3 className="why-choose-us-number">03.</h3>
              <div lassName="why-choose-us-sub-item">
              <h3 className="why-choose-us-item-title">Эксклюзивный доступ</h3>
              <p className="why-choose-us-item-description">Этот чемпионат предназначен исключительно для выдающихся IT-специалистов с опытом работы не менее пяти лет, что гарантирует высокий уровень квалификации и профессионализма среди участников. Это создает уникальную среду для обмена передовыми знаниями и опытом.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-choose-us-image">
          <img src={UsImg} alt="Why Choose Us" />
        </div>
      </div>
        <h3 className="about-subtitle">Наша миссия</h3>
        <p className="about-text">Наша миссия — содействовать развитию IT-сектора, предоставляя платформу для лучших умов, чтобы они могли продемонстрировать свои навыки, обмениваться знаниями и расширять границы инноваций. Мы стремимся к продвижению высочайших стандартов профессионализма и достижений в IT-сообществе. International IT Skills Competition способствует развитию новых технологий и инноваций, что делает его важным событием для всего мирового IT-сообщества.</p>
        <h3 className="about-subtitle">Присоединяйтесь к нам</h3>
        <p className="about-text">Если вы IT-специалист с подтвержденным опытом и стремлением к совершенству, мы приглашаем вас принять участие в International IT Skills Competition. Примите вызов, продемонстрируйте свою экспертизу и станьте частью сообщества, которое ценит и празднует вершины IT-таланта.</p>
        <h3 className="about-subtitle">Свяжитесь с нами</h3>
        <p className="about-text">Для получения дополнительной информации о том, как принять участие, возможности спонсорства и детали мероприятия, пожалуйста, свяжитесь с нами по электронной почте itskillscompetition@gmail.com или посетите наш сайт itskillscompetition.com.</p>
        <h3 className="about-subtitle">Поднимите свою карьеру. Покажите свои навыки. Станьте частью International IT Skills Competition!</h3>
        <p className="about-text">International IT Skills Competition — это не просто соревнование. Это шанс поднять свою карьеру на новый уровень, показать свои навыки на международной арене и стать частью сообщества, стремящегося к инновациям и совершенству в IT-сфере.</p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
