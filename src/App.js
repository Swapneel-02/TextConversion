import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode =() =>{
    setMode(mode === 'dark' ? 'light' : 'dark');
    document.body.style.backgroundColor=(mode === 'dark' ? 'white' : 'black');
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter your text here:" mode={mode}/>
      </div> 
    </>
  );
}

export default App;
