import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import NavBar from './Components/NavBar';
import Main from './Pages/Main';
import FooterM from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section>
        <Main />
      </section>
      <FooterM />
     
    </div>
  );
}

export default App;
