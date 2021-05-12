import React, { useState } from "react";
import "./toggleMode.scss";
import moon from "../../../images/icons/moon.png";
import sun from "../../../images/icons/sun.png";

const ToggleMode = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = (e) => {
    e.stopPropagation();
    const root = document.querySelector(":root");
    root.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="toggle-mode" onClick={toggleDarkMode}>
      <div className={`toggle-body `}>
        <div className={`toggle-button ${dark ? "dark-activated" : ""}`}>
          <img src={dark ? moon : sun}></img>
        </div>
      </div>
    </div>
  );
};

export default ToggleMode;
