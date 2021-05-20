import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input style={{color:"white",borderBottom:'2px solid',borderRadius:'30px'}} type="text" name="city" placeholder="City..."/>
		<input style={{color:"white",borderBottom:'2px solid',borderRadius:'30px'}} type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;