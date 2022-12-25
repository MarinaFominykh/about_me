import "./Feedback.scss";
import React, { useState, useContext, useEffect } from "react";
import InputMask from "react-input-mask";
import Popup from "../Popup/Popup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { SUCCESSFULLY, UNSUCCESSFULLY } from "../../utils/message.js";
import { useFormValidation } from "../../hooks/useFormValidation.js";
function Feedback({ isOpen, onClose, useEscapePress, showSuccess }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormValidation();
  const [message, setMessage] = useState("");

  const showInfoToolTip = (error) => {
    setMessage(error);
    setTimeout(() => setMessage(""), 3000);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onClose();
      showSuccess();
    } else {
      showInfoToolTip(UNSUCCESSFULLY);
    }
  }
  // обработчик по нажитию Esc
  useEscapePress(onClose, isOpen);

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <Popup isOpen={isOpen}>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h2 className="form__title">Форма обратной связи</h2>
        <button
          onClick={onClose}
          className="form__close"
          type="button"
        ></button>
        <fieldset className="form__fields">
          <label className="form__label" htmlFor="name">
            Имя <sup>*</sup>
            <input
              className="form__input"
              name="name"
              type="text"
              placeholder="Введите имя"
              required
              value={values.name || ""}
              onChange={handleChange}
            />
            <InfoTooltip message={errors.name || ""}></InfoTooltip>
          </label>

          <label className="form__label" htmlFor="name">
            E-mail
            <input
              className="form__input"
              name="email"
              type="email"
              placeholder="Введите e-mail"
              value={values.email || ""}
              onChange={handleChange}
            />
            <InfoTooltip
              message={errors.email ? "Введите корректный e-mail" : ""}
            ></InfoTooltip>
          </label>

          <label className="form__label" htmlFor="tel">
            Телефон <sup>*</sup>
            <InputMask
              className="form__input"
              name="tel"
              type="tel"
              placeholder="Введите телефон"
              required
              value={values.tel || ""}
              onChange={handleChange}
              mask="+7\(999) 999-99-99"
              maskChar=" "
            />
          </label>
        </fieldset>
        <div className="form__message-container">
          <InfoTooltip message={message} />
        </div>

        <button className="form__button-submit button">Отправить</button>
      </form>
    </Popup>
  );
}
export default Feedback;
