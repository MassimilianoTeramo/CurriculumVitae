import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import './index.css';
import NavBar from './Components/NavBar';
import Main from './Pages/Main';
import FooterM from './Components/Footer';
import { useState } from 'react';
import { DarkMode } from './Components/DarkMode';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <DarkMode handleChange={() => setDarkMode(!darkMode)} isChecked={darkMode} />

      <NavBar />
      <section>
        <Main />
      </section>
      <FooterM />

    </div>
    
  );
}

export default App;
