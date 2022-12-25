import "./Success.scss";
import Popup from "../Popup/Popup";
import tick from "../../image/success.png";
function Success({ isOpen, onClose, useEscapePress }) {
  // обработчик по нажитию Esc
  useEscapePress(onClose, isOpen);
  return (
    <Popup isOpen={isOpen}>
      <article className="success">
        <button onClick={onClose} className="success__close"></button>
        <img src={tick} alt="галочка" className="success__img" />
        <p className="success__message">Форма успешно отправлена!</p>
      </article>
    </Popup>
  );
}
export default Success;
