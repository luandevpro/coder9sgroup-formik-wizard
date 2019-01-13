import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";

export default class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [],
		};
	}
	render() {
		var { languages } = this.state;
		return (
			<Formik initialValues={{ languages }}>
				{props => <FormField {...props} />}
			</Formik>
		);
	}
}
