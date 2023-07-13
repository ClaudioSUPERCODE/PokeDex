// Infrastructure
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home'
// Components
import PokeDetails from './components/PokeDetails'
// Styling
import './App.css';

import LightDarkMode from './components/LightDarkMode';

import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('background');
    } else {
      setTheme('light');
    }
  };

  return (
    <section className={`${theme}`}>
      <LightDarkMode toggle={toggleTheme} />
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:details' element={<PokeDetails />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
