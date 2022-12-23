import React from "react";
import "./Techs.scss";

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Навыки</h2>
      <p className="techs__description">Технологии</p>

      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">MongoDB</li>
      </ul>
      <p className="techs__description">Навыки</p>
      <ul className="techs__skills">
        <li className="techs__skill">Вёрстка html-страниц</li>
        <li className="techs__skill">Адаптивная вёрстка</li>
        <li className="techs__skill">
          Написание функциональности на языке JavaScript
        </li>
        <li className="techs__skill">
          Создание одностраничных приложений на React
        </li>
        <li className="techs__skill">Работа с GitHub, в том числе командная</li>
        <li className="techs__skill">Серверная разработка на Node.js</li>
        <li className="techs__skill">
          Создание и интеграция базы данных (MongoDB) в приложение{" "}
        </li>
      </ul>
    </section>
  );
}

export default Techs;
