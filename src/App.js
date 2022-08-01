import './App.css';
import {useState} from 'react';
import {Nav} from './components/exports';
import css from './appStatic';

function App() {
  const [darkMode, setDarkMode] = useState(css.isDark);


  return (
    <div className={darkMode ? css.wrapperDark : css.wrapper}>
      <Nav 
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        isDark={windowThemeDark}
      />
    </div>
  );
}

export default App;
