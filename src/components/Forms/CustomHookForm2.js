import React from "react";
import { useInput } from "../../hooks/useInput";

const Form = () => {
    const name = useInput("");
    const age = useInput("");
    const favColor = useInput("");
    const favColor = useInput("");
    const favColor = useInput("");

    return (
        <div>
            <input type="text" placeholder="First Name" {...name} />
            <input type="text" placeholder="Last Name" {...age} />
            <input type="text" placeholder="Email" {...favColor} />
            <h1>Name: {name.value}</h1>
            <h1>Age: {age.value}</h1>
            <h1>Favorite Color: {favColor.value}</h1>
        </div>
    );
};

export default Form;
