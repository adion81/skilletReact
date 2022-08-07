import './App.css';
import {useState} from 'react';
import {Home, Nav, ProfileMenu} from './components/exports';
import css from './appStatic';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(css.isDark);
  const [menuActive, setMenuActive] = useState(false);


  return (
    <div className={darkMode ? css.wrapperDark : css.wrapper}>
      <Nav 
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        isDark={css.isDark}
        toggleMenu={{
          handle:setMenuActive,
          toggle:menuActive
        }}
      />
      {
        menuActive ?
          <ProfileMenu
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          /> : null
      }
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
