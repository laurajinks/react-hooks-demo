import React from "react";
import { useInput } from "../../hooks/useInput";

const Form = () => {
	const firstName = useInput("");
	const age = useInput(null);
	const favColor = useInput("");
	const favDrink = useInput("");

	return (
		<div className="form">
			<h1> Custom Hook Form #2</h1>
			<input type="text" placeholder="First Name" {...firstName} />
			<input type="number" placeholder="Age" {...age} />
			<input type="text" placeholder="Favorite Color" {...favColor} />
			<div {...favDrink}>
				<input type="radio" name="drink" id="coffee" value="Coffee" />
				<label for="coffee">Coffee</label>
				<input type="radio" name="drink" id="tea" value="Tea" />
				<label for="tea">Tea</label>
			</div>
			<h2>First Name: <span>{firstName.value}</span></h2>
			<h2>Age: <span>{age.value}</span></h2>
			<h2>Favorite Color: <span>{favColor.value}</span></h2>
			<h2>Favorite Drink: <span>{favDrink.value}</span></h2>
		</div >
	);
};

export default Form;
