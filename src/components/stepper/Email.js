import React, { Component } from "react";
import { Field } from "formik";
import CustomInput from "../form/fields/CustomInput";

export default class Email extends Component {
	render() {
		return (
			<div className="form-group">
				<Field
					label="Email"
					name="email"
					type="email"
					placeholder="Enter your email"
					className="form-control"
					component={CustomInput}
				/>
			</div>
		);
	}
}
