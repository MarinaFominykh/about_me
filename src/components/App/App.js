import "./App.scss";
import React, { useState, useContext, useEffect } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import Feedback from "../Feedback/Feedback";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  // обработчик по нажитию Esc
  function useEscapePress(callback, dependency) {
    useEffect(() => {
      if (dependency) {
        const onEscClose = (e) => {
          if (e.key === "Escape") {
            callback();
          }
        };
        document.addEventListener("keyup", onEscClose);

        return () => {
          document.removeEventListener("keyup", onEscClose);
        };
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dependency]);
  }

  return (
    <main className="main">
      <AboutMe onClick={openPopup} />
      <Techs />
      <Feedback
        isOpen={isOpen}
        onClose={closePopup}
        useEscapePress={useEscapePress}
      />
    </main>
  );
}

export default App;
