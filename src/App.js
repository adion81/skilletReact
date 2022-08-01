import './App.css';
import {useState} from 'react';
import {Nav} from './components/exports';
import css from './appStatic';
const windowThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches

function App() {
  const [darkMode, setDarkMode] = useState(windowThemeDark);


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
