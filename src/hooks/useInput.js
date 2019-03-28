import { useState } from "react";

export const useInput = initialValue => {
    const [values, setValue] = useState(initialValue);
    return {
        values,
        onChange: e => {
            setValue({ ...values, [e.target.name]: e.target.value });
        }
    };
};
