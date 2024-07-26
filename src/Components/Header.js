import React, { useEffect, useState } from "react";

const Header = ({ handleToggleMode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load saved dark mode preference from localStorage
    const savedMode = JSON.parse(localStorage.getItem('dark-mode'));
    if (savedMode !== null) setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    // Save dark mode preference to localStorage
    localStorage.setItem('dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    handleToggleMode(newDarkMode);
  };

  return (
    <div className="header">
      <h1>Your Personal Reminder Hub</h1>
      <button
        onClick={toggleDarkMode}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
