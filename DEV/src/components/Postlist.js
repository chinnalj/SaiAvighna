import React, { Component } from 'react';
import axios from 'axios';

class Postlist extends Component {
    constructor (props) {
        super (props)
        this.state = {
            posts: []
        }
    } 
    componentDidMount() {
        axios.get('http://ec2-3-17-144-103.us-east-2.compute.amazonaws.com:9090/ws/rest/IntegrationAPI/patients/all')
        .then ( response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                List of Patients
            </div>
        )
    }
}

export default Postlist;