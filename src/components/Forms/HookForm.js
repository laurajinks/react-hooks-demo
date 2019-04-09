import React, { useState, useEffect } from "react";

const HookForm = () => {
    const [inputs, setInputs] = useState({ firstName: '', lastName: '', email: '' })
    const [color, setColor] = useState('black')

    useEffect(() => {
        console.log('useEffect')
        if (inputs.firstName === 'Laura') {
            setColor('red');
        } else {
            setColor('black')
        }
    }, [inputs.firstName])

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }


    return (
        <div className="form">
            <h1>useState Hook Form</h1>
            <input type="text" placeholder="First Name" name='firstName' onChange={handleInputChange} />
            <input type="text" placeholder="Last Name" name='lastName' onChange={handleInputChange} />
            <input type="text" placeholder="Email" name='email' onChange={handleInputChange} />
            <h2>First Name: <span style={{ color }}>{inputs.firstName}</span></h2>
            <h2>Last Name: <span>{inputs.lastName}</span></h2>
            <h2>Email: <span>{inputs.email}</span></h2>
        </div>
    );
};

export default HookForm;