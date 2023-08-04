import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import styles from './style.module.css';

const Themetoggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  const themeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // If theme is not yet loaded, do not render
  if (theme === null) {
    return null;
  }

  return (
    <div className={styles.theme_toggler} onClick={themeToggle}>
      <WiMoonAltWaningCrescent4 className={styles.theme_toggler_svg} />
    </div>
  );
};

export default Themetoggle;
