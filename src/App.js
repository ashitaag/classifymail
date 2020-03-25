import React from 'react';
import logo from './logo.svg';
import './Component/App.css';
import NavbarPage from "./Component/Navigation";
import FormPage from "./Component/EmailForm";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavbarPage />
          <br/>
        <FormPage/>
      </div>
    );
  }
}

export default App;
