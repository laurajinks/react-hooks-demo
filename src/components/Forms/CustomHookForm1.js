import React from "react";
import { useInput } from "../../hooks/useInput";

const Form = () => {
	const firstName = useInput("");
	const lastName = useInput("");
	const email = useInput("");

	return (
		<div className="form">
			<h1>Custom Hook Form #1</h1>
			<input type="text" placeholder="First Name" {...firstName} />
			<input type="text" placeholder="Last Name" {...lastName} />
			<input type="text" placeholder="Email" onChange={email.onChange} />
			<h2>First Name: <span>{firstName.value}</span></h2>
			<h2>Last Name: <span>{lastName.value}</span></h2>
			<h2>Email: <span>{email.value}</span></h2>
		</div>
	);
};

export default Form;
