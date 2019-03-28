import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="form">
                <h1>Form in Class Component</h1>
                <input type="text" placeholder="First Name" name="firstName" onChange={handleInput} />
                <input type="text" placeholder="Last Name" name='lastName' onChange={handleInput} />
                <input type="text" placeholder="Email" name='email' onChange={handleInput} />
                <h2>First Name: <span>{this.state.firstName}</span></h2>
                <h2>Last Name: <span>{this.state.lastName}</span></h2>
                <h2>Email: <span>{this.state.email}</span></h2>
            </div>
        )
    }
}