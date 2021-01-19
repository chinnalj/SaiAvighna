import React from 'react';
import ReactDOM from 'react-dom';
import './MainBody.css';


export class PatientList extends React.Component {
   
    render () {
        return(
<div className="PL_Header">
    <div class="row">
        <div class="col-lg-6" >
            <h4>Total Patients: </h4>
        </div>
        
    </div>
   </div>
        )
    }
}

export default PatientList