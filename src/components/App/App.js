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
  function closePopup() {
    setIsOpen(false);
  }
  return (
    <main className="main">
      <AboutMe onClick={openPopup} />
      <Techs />
      <Feedback isOpen={isOpen} onClose={closePopup} />
    </main>
  );
}

export default App;
