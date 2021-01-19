import React, { Component } from 'react';  
import './FormElements.css';

export class NewPatient extends React.Component {
  constructor(props) {  
    super(props);  
    this.updateSubmit = this.updateSubmit.bind(this);  
    this.input = React.createRef();  
}  
updateSubmit(event) {  
    alert('You have entered the UserName and CompanyName successfully.');  
    event.preventDefault();  
}  
render() {  
  return (  
    <div className="body_bg">
    <form onSubmit={this.updateSubmit}>  
      <div className="header_regpat">Register Patient</div> 
      <div className="header_basicDetails">BASIC DETAILS</div> 
      <div className="header_form"> 
      {/* <label className="form_attrName">PATIENT NAME:  
          <input type="text" ref={this.input} />  
      </label>  
      <label>  
          Mobile Number:  
          <input type="text" ref={this.input} />  
      </label>   */}
      <label class="form_attrName">PATIENT NAME<span class="asteric">*</span></label>
      <div className="header_element">
     <select id="salutation" name="salutation">
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Master">Master</option>
          <option value="Baby">Baby</option>
        </select>
      <input type="text"/>
      <label class="container">VIP
  <input type="checkbox"/>
  <span class="checkmark"></span></label>         
  </div>  
      <input type="submit" value="Register" /> 
     
      </div>
    </form>  
    </div>
  );  
}  
}  
  
  export default NewPatient