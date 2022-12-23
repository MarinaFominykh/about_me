import "./Feedback.scss";
import Popup from "../Popup/Popup";
function Feedback({ isOpen, onSubmit, onClose }) {
  return (
    <Popup isOpen={isOpen}>
      <form className="form" onSubmit={onSubmit} noValidate>
        <h2 className="form__title">Форма обратной связи</h2>
        <button
          onClick={onClose}
          className="form__close"
          type="button"
        ></button>
        <fieldset className="form__fields">
          <label className="form__label" htmlFor="name">
            Имя <sup>*</sup>
          </label>
          <input
            className="form__input"
            name="name"
            type="text"
            placeholder="Введите имя"
            required
          />
          <label className="form__label" htmlFor="name">
            E-mail
          </label>
          <input
            className="form__input"
            name="email"
            type="email"
            placeholder="Введите e-mail"
          />
          <label className="form__label" htmlFor="tel">
            Телефон <sup>*</sup>
          </label>
          <input
            className="form__input"
            name="tel"
            type="tel"
            placeholder="Введите телефон"
            required
          />
        </fieldset>
        <button className="form__button-submit button">Отправить</button>
      </form>
    </Popup>
  );
}
export default Feedback;
