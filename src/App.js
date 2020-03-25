import React from 'react';
import logo from './logo.svg';
import './Component/App.css';
import NavbarPage from "./Component/Navigation";
import FormPage from "./Component/EmailForm";

class App extends React.Component {
  render(){
    return (
      <div>
        <NavbarPage />
          <br/>
        <FormPage/>
      </div>
    );
  }
}

export default App;
