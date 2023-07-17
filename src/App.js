import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
function App() {
  const [currentForm,setCurrentForm] =useState("login");
  const toggledForm=(forName)=>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
     currentForm == "login" ?<Login onFormSwitch={toggledForm} />:<Register onFormSwitch={toggledForm} />
      }
      </div>
  );
}

export default App;
