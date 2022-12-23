import "./Popup.scss";

function Popup({ isOpen, children }) {
  return (
    <aside className={`popup ${isOpen && "popup_opened"}`}>{children}</aside>
  );
}
export default Popup;
