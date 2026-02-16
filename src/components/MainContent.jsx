import React from 'react';
import { Link } from 'react-router-dom';
import MainImg from '../img/Offerings@2x.png';
import UsImg from '../img/why-choose-us.png';
import TrustedImage from '../img/1.png';
import NewsPreview from './NewsPreview';

import SponsorLogo1 from '../img/sponsors/1.svg'; 
import SponsorLogo2 from '../img/sponsors/2.svg';
import SponsorLogo3 from '../img/sponsors/3.svg';
import SponsorLogo4 from '../img/sponsors/4.svg';
import SponsorLogo5 from '../img/sponsors/5.svg';
import SponsorLogo6 from '../img/sponsors/6.svg';

const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <div className="section-dotted-bg"></div>
        <div className="animated-lines">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`animated-line line-${i + 1}`}></div>
          ))}
        </div>
        <div className="content">
          <div className="text-section">
            <div className='pre-title'>международный чемпионат</div>
            <div className='main-title'>International IT <br /> Skills <span className="highlight">Competition</span></div>
            <p className='main-text'>Объединяющий выдающихся IT-специалистов из всех стран СНГ. Это событие, проводимое ежегодно с 1 по 17 апреля с 2018 года, стало синонимом высочайших стандартов профессионализма и инноваций в IT-сфере.</p>
            <Link to="/apply" className="start-button">Подать заявку</Link>
          </div>
          <div className="image-section">
            <div className="orbit"></div>
            <img src={MainImg} alt="IT Solutions Illustration" />
          </div>
        </div>
      </div>
      
      <div className="services-section">
        <div className="services-header">
          <div className='services-text-cont'>   
          <div className='pre-title'>Номинации</div>       
          <h2 className="services-title">International IT
          Skills Competition</h2>
          <p className="services-subtitle">В рамках чемпионата участники соревнуются в различных номинациях, отражающих ключевые направления и достижения в IT-индустрии.</p></div>
          <div>
          <Link to="/about" className="services-button">
            Больше о чемпионате <i className="flaticon-right-arrow-1"></i>
          </Link>
          </div>
        </div>
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
      </div>

      <div className="trusted-section">
        <div className="trusted-content">
          <div className="pre-title">О НАС</div>
          <h2 className="trusted-title">
            Мы работаем для вас с <span className="highlight">2018</span>
          </h2>
          <p className="trusted-description">
            С 1 по 17 апреля 2018 года чемпионат предоставляет динамичную платформу для лучших умов IT-индустрии, где они могут продемонстрировать свои исключительные навыки и решения. Участники соревнуются в различных номинациях, подчеркивая свою экспертизу и инновационность. Этот период интенсивных соревнований и сотрудничества позволяет участникам расширять границы технологий, развивать новые идеи и устанавливать стандарты в отрасли.
          </p>
          <div className="trusted-cards">
            <div className="trusted-card">
              <div className="trusted-icon">
                <i className="flaticon-medal info-icon"></i>
              </div>
              <h3 className="trusted-card-title">Мировое признание</h3>
            </div>
            <div className="trusted-card">
              <div className="trusted-icon">
                <i className="flaticon-technical-support-1 info-icon"></i>
              </div>
              <h3 className="trusted-card-title">Престижная платформа</h3>
            </div>
            <div className="trusted-card">
              <div className="trusted-icon">
                <i className="flaticon-nft-1 info-icon"></i>
              </div>
              <h3 className="trusted-card-title">Эксклюзивный доступ</h3>
            </div>
            <div className="trusted-card">
              <div className="trusted-icon">
                <i className="flaticon-game-console info-icon"></i>
              </div>
              <h3 className="trusted-card-title">Инновации и превосходство</h3>
            </div>
          </div>
          <Link to="/winners" className="services-button">Победители</Link>
        </div>
        <div className="trusted-image">
          <img src={TrustedImage} alt="Trusted Clients" />
        </div>
      </div>

      <div className="why-choose-us-section">
        <div className="why-choose-us-content">
          <div className='pre-title'>почему мы</div>  
          <h2 className="why-choose-us-title">
            Почему <span className="highlight">стоит</span> участвовать?
          </h2>
          <div className="why-choose-us-items">
            <div className="why-choose-us-item">
              <h3 className="why-choose-us-number">01.</h3>
              <div className="why-choose-us-sub-item">
                <h3 className="why-choose-us-item-title">Мировое признание</h3>
                <p className="why-choose-us-item-description"> Участвуя в этом чемпионате, вы получите возможность соревноваться с лучшими IT-талантами из стран СНГ, что не только повышает ваш профессиональный статус, но и приносит вам международное признание.</p>
              </div>
            </div>
            <div className="why-choose-us-item">
              <h3 className="why-choose-us-number">02.</h3>
              <div className="why-choose-us-sub-item">
                <h3 className="why-choose-us-item-title">Престижная платформа</h3>
                <p className="why-choose-us-item-description">International IT Skills Competition — одно из самых престижных соревнований в IT-сфере. Будучи его участником, вы становитесь частью элитной группы профессионалов, известных своими достижениями и высокой экспертизой.</p>
              </div>
            </div>
            <div className="why-choose-us-item">
              <h3 className="why-choose-us-number">03.</h3>
              <div className="why-choose-us-sub-item">
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

      <div className="sponsors-section">
        <div className="sponsors-title">Спонсоры International IT Skills Competition</div>
        <div className="sponsors-logos">
          <img src={SponsorLogo1} alt="Sponsor 1" />
          <img src={SponsorLogo2} alt="Sponsor 2" />
          <img src={SponsorLogo3} alt="Sponsor 3" />
          <img src={SponsorLogo4} alt="Sponsor 4" />
          <img src={SponsorLogo5} alt="Sponsor 5" />
          <img src={SponsorLogo6} alt="Sponsor 6" />
        </div>
      </div>

      <div className="services-section">
        <div className="services-header">
          <div className='services-text-cont'>   
          <div className='pre-title'>Блог</div>       
          <h2 className="services-title">Последние статьи</h2>
          </div>
          <div>
          <Link to="/articles" className="services-button">
            Больше статей <i className="flaticon-right-arrow-1"></i>
          </Link>
          </div>
        </div>
        <NewsPreview />
      </div>
    </>
  );
};

export default MainContent;
