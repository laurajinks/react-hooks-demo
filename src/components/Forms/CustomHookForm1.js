import React from "react";
import { useInput } from "../../hooks/useInput";

const Form = () => {
	const { values, onChange } = useInput({})

	return (
		<div className="form">
			<h1>Custom Hook Form #1</h1>
			<input type="text" placeholder="First Name" name='firstName' onChange={onChange} />
			<input type="text" placeholder="Last Name" name='lastName' onChange={onChange} />
			<input type="text" placeholder="Email" name='email' onChange={onChange} />
			<h2>First Name: <span>{values.firstName}</span></h2>
			<h2>Last Name: <span>{values.lastName}</span></h2>
			<h2>Email: <span>{values.email}</span></h2>
		</div>
	);
};

export default Form;
