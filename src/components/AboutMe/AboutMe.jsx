import "./AboutMe.scss";
import React from "react";
import Photo from "../../image/avatar.jpg";

function AboutMe({ onClick }) {
  return (
    <section className="about-me" id="about-me">
      <h1 className="about-me__title">Обо мне</h1>
      <div className="about-me__container">
        <div className="about-me__text-container">
          <p className="about-me__name">Марина</p>
          <p className="about-me__intro">
            Владимир Ильич Ленин (настоящая фамилия Ульянов) родился 10 апреля
            (22 по новому стилю) 1870 г. в г. Симбирске (ныне Ульяновск) в семье
            инспектора народных училищ Симбирской губернии Ильи Николаевича
            Ульянова и его жены Марии Александровны (урожденной Бланк).
          </p>
          <ul className="about-me__site-container">
            <li className="about-me__site">
              <a
                href="https://github.com/MarinaFominykh/MarinaFominykh"
                className="about-me__site-link"
              >
                <div className="about-me__social-img about-me__social_git"></div>
                <p className="about-me__social-title">GitHub</p>
              </a>
            </li>
            <li className="about-me__site">
              <a href="#" className="about-me__site-link">
                <div className="about-me__social-img about-me__social_vk"></div>
                <p className="about-me__social-title">ВКонтакте</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me__photo-wrapper">
          <img src={Photo} className="about-me__photo" alt="Фото"></img>
        </div>
      </div>
      <button onClick={onClick} className="about-me__button button">
        Обратная связь
      </button>
    </section>
  );
}

export default AboutMe;
