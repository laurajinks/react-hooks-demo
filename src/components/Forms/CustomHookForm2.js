import React from "react";
import { useInput } from "../../hooks/useInput";

const Form = () => {
	const { values, onChange } = useInput({})

	return (
		<div className="form">
			<h1> Custom Hook Form #2</h1>
			<input type="text" placeholder="First Name" name='firstName' onChange={onChange} />
			<input type="number" placeholder="Age" name='age' onChange={onChange} />
			<input type="text" placeholder="Favorite Color" name='favColor' onChange={onChange} />
			<div onChange={onChange}>
				<input type="radio" name="favDrink" id="coffee" value="Coffee" />
				<label htmlFor="coffee">Coffee</label>
				<input type="radio" name="favDrink" id="tea" value="Tea" />
				<label htmlFor="tea">Tea</label>
			</div>
			<h2>First Name: <span>{values.firstName}</span></h2>
			<h2>Age: <span>{values.age}</span></h2>
			<h2>Favorite Color: <span>{values.favColor}</span></h2>
			<h2>Favorite Drink: <span>{values.favDrink}</span></h2>
		</div >
	);
};

export default Form;
