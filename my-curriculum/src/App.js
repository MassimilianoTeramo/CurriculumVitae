import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import './Footer.css';
import './Career.css';
import './index.css';
import NavBar from './Components/NavBar';
import Main from './Pages/Main';
import ToolsSkills from './Components/ToolsSkills';
import FooterM from './Components/Footer';
import { useState } from 'react';
import { DarkMode } from './Components/DarkMode';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Career from './Pages/Career';
import Hobbies from './Pages/Hobbies';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <DarkMode handleChange={() => setDarkMode(!darkMode)} isChecked={darkMode} />

      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Contact" element={<Main />} />
          <Route path="/Hobbies" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>
      <ToolsSkills />
      <FooterM />

    </div>
    
  );
}

export default App;
