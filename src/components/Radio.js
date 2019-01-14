import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";
import { validationSchema } from "./validation";

export default class Radio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [],
		};
	}
	handleSubmit = values => {
		console.log(JSON.stringify(values, null, 2));
	};
	render() {
		var { languages } = this.state;
		var { _languages } = this.props;
		return (
			<Formik
				initialValues={{ languages }}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
			>
				{props => <FormField {...props} _languages={_languages} />}
			</Formik>
		);
	}
}
