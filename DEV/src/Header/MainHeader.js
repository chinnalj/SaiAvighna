import React, { Component } from 'react';  
import './Header.css';

export class MainHeader extends React.Component {  
   render() {  
      return (  
         <div className="header">  
            <ul>
               <li><a className="active" href="#dashboard">DASHBOARD</a></li>
               <li><a href="#appointments">APPOINTMENTS</a></li>
               <li><a href="#patients">PATIENTS</a></li>
               <li><a href="#careteam">CARE TEAM</a></li>
            </ul>
         </div> 
      );  
   }  
}  

export default MainHeader;