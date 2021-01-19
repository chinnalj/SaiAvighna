import React, { Component } from 'react';  
import './MainBody.css';

export class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.registerPatient = this.registerPatient.bind(this);
  }
  registerPatient (event) {
    alert("Time to register new patient");

  }
render() {  
  return (  
    <div>
      <input type="submit" value="REGISTER PATIENT" onClick={this.registerPatient}/> 
    </div>
  );  
}  
}  
  
  export default MainBody