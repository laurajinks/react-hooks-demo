import React from "react";
import { useInput } from "../../hooks/useInput";

const Form = () => {
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");

    return (
        <div>
            <input type="text" placeholder="First Name" {...firstName} />
            <input type="text" placeholder="Last Name" {...lastName} />
            <input type="text" placeholder="Email" {...email} />
            <h1>First Name: {firstName.value}</h1>
            <h1>Last Name: {lastName.value}</h1>
            <h1>Email: {email.value}</h1>
        </div>
    );
};

export default Form;
