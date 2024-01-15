import { useEffect, useState } from 'react';
import './Toggle.css';
import { CiCloudMoon, CiCloudSun } from 'react-icons/ci';

const isDark =
  localStorage.getItem('mode') !== null
    ? JSON.parse(localStorage.getItem('mode'))
    : false;

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(isDark);

  useEffect(() => {
    const mode = isDarkMode ? 'dark' : 'light';
    document.body.classList.add(mode);
    localStorage.setItem('mode', JSON.stringify(isDarkMode));

    return () => {
      document.body.classList.remove(mode);
    };
  }, [isDarkMode]);

  const handleModeChange = () => {
    setIsDarkMode((prev) => !prev);
  };

  const icon = !isDarkMode ? (
    <CiCloudMoon size={28} />
  ) : (
    <CiCloudSun size={28} />
  );

  return (
    <div className="toggle__container">
      <label htmlFor="toggle" className="switch">
        <input
          type="checkbox"
          className="toggle__switch"
          id="toggle"
          onChange={handleModeChange}
        />
        <span className="slider"></span>
      </label>
      <div className="toggle___icon">{icon}</div>
    </div>
  );
};

export default Toggle;
