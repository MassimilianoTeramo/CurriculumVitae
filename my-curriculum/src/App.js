import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import FooterM from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="App-header"></section>
      <FooterM />
     
    </div>
  );
}

export default App;
