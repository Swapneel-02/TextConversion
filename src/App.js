import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import About from './components/About';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type) => {
       setAlert({
          msg: message,
          type: type
       })
       setTimeout(() =>{
         setAlert(null);    
       }, 2000);
  }

  const toggleMode =() =>{
    setMode(mode === 'dark' ? 'light' : 'dark');
    document.body.style.backgroundColor=(mode === 'dark' ? 'white' : '#02204a');
    if(mode === 'light'){
      showAlert('Dark mode has been enabled',"success");
    }
    else{
      showAlert('Light mode has been enabled',"success");
    }
  }
  // const changeMode =() => {
  //    if (mode==='danger'){
  //     showAlert('Red mode has been enabled',"danger");
  //     document.body.style.backgroundColor='red';
  //    }
  //    else if( mode==='success'){
  //     showAlert('Green mode has been enabled',"success");
  //     document.body.style.backgroundColor='green';
  //    }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
       <Routes>
        <Route path="/About" element={<About/>} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here:" mode={mode}/>} />
       </Routes>       
      </div> 
      </Router>
    </>
  );
}

export default App;
