import React from "react";
import styles from "../styles/DarkMode.module.css";
import { useState } from "react";

const DarkModeToggle = () => {
  // Tests expect the app to start in dark mode, so default to true
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={isDarkMode ? styles["button-light"] : styles["button-dark"]}
      >
        Toggle {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
