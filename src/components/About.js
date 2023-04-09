import React from "react";

export default function About(props){
  let myStyle = {
     color: props.mode === 'dark' ? 'white': '',
     backgroundColor: props.mode ==='dark' ? '#212529' : 'white'
  }                       
    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white': 'black', backgroundColor: props.mode ==='dark' ? '#21252900' : 'white'}}>
        <h2 className="my-3">About Us</h2>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item ">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === 'dark' ? 'white': 'black', backgroundColor: props.mode ==='dark' ? '#72038b' : 'white'}}>
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyse and modify your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode === 'dark' ? 'white': 'black', backgroundColor: props.mode ==='dark' ? '#72038b' : 'white'}}>
        Free and Easy to use
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        TextUtils is a free text utility tool that provides instant text modification for a given text. It provides features like converion of uppercase to lowercase and vice versa, word count, copy text, clear extra spaces.
      </div>
    </div>
  </div>
  <div class="accordion-item" >
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode === 'dark' ? 'white': 'black', backgroundColor: props.mode ==='dark' ? '#72038b' : 'white'}}>
        Vast Compatibility
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        TextUtils is compatible with all major browsers and supports all major features of the browser.
      </div>
    </div>
  </div>
</div>
</div>
    )
}