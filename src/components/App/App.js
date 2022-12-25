import "./App.scss";
import React, { useState, useEffect } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import Feedback from "../Feedback/Feedback";
import Success from "../Success/Succes";

function App() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const openFeedbackPopup = () => {
    setIsFeedbackOpen(true);
  };
  const closeFeedbackPopup = () => {
    setIsFeedbackOpen(false);
  };
  const openSuccessPopup = () => {
    setIsSuccessOpen(true);
  };
  const closeSuccessPopup = () => {
    setIsSuccessOpen(false);
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
      <AboutMe onClick={openFeedbackPopup} />
      <Techs />
      <Feedback
        isOpen={isFeedbackOpen}
        onClose={closeFeedbackPopup}
        useEscapePress={useEscapePress}
        showSuccess={openSuccessPopup}
      />
      <Success
        isOpen={isSuccessOpen}
        onClose={closeSuccessPopup}
        useEscapePress={useEscapePress}
      />
    </main>
  );
}

export default App;
