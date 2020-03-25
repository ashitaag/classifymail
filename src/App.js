import React from 'react';
import logo from './logo.svg';
import './Component/App.css';
import NavbarPage from "./Component/Navigation";
import FormPage from "./Component/EmailForm";

function App() {
  return (
    <div className="App">
      <NavbarPage />
        <br/>
      <FormPage/>
    </div>
  );
}

export default App;
