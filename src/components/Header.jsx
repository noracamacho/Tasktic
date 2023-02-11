import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
// import Logo2 from '../assets/logo2.svg';

const Header = () => {

  const [theme, setTheme] = useState('dark');

  document.documentElement.classList.add(theme);

  useEffect(() => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);

  }, [theme])


  return (
    <header>
        <div className="logo">
          <img src={Logo} alt="Taskmate Logo" />
          <span>Tasktic</span>
        </div>
        <div className="themeSelector">
          <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
          <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
          <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
          <span onClick={() => setTheme("blueTheme")} className={ theme === "blueTheme" ? "blueTheme activeTheme" : "blueTheme"}></span>
          <span onClick={() => setTheme("pinkTheme")} className={ theme === "pinkTheme" ? "pinkTheme activeTheme" : "pinkTheme"}></span>
          <span onClick={() => setTheme("purpleTheme")} className={ theme === "purpleTheme" ? "purpleTheme activeTheme" : "purpleTheme"}></span>
        </div>
    </header>
  )
}

export default Header