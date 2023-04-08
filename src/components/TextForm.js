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
  const handleClearClick =()=>{
    let newText='';
    setText(newText);
  }
    const handleOnChange =(event) =>{
        setText(event.target.value);
    }
    const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to Clipboard","success");
    }
    const handleExtraSpaces =() => {
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "))
    }
    const [text,setText] = useState('');
     
    function getCount(str) {
      return str.split(' ').filter(function(num) {
       return num !== ''
      }).length;
     }
  return (
    <>
    <div>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1> 
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-outline-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-outline-primary mx-1.5" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-outline-primary mx-1.5" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container" my-2 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
       <h2>Your text summary</h2>
       <p>{getCount(text)} words and {text.length} characters</p>   
       <h3>Preview</h3>
       <p>{text}</p>
    </div>  
  </div> 
    </>
  )
}
