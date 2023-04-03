import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick =()=>{
      let newText=text.toLowerCase();
      setText(newText);
  }
    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    const [text, setText]=useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1> 
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
    </div>
    <div className="container">
       <h2>Your text summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>   
       <h3>Preview</h3>
       <p>{text}</p>
    </div>  
    </>
  )
}
