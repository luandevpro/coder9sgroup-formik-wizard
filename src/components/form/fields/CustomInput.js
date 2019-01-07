import React from "react";
import { ErrorMessage } from "formik";

export default props => (
	<div className="form-group">
		<label htmlFor={props.id}> {props.label} </label>
		<input
			{...props.field}
			type={props.type}
			className={props.className}
			placeholder={props.placeholder}
		/>
		<ErrorMessage
			name="email"
			render={msg => <div className="text-danger">{msg}</div>}
		/>
	</div>
);
