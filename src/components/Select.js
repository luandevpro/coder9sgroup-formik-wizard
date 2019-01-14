import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";
import { validationSchema } from "./validation";

export default class Radio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			company: [],
		};
	}
	handleSubmit = values => {
		console.log(JSON.stringify(values, null, 2));
	};
	render() {
		var { company } = this.state;
		var { _company } = this.props;
		return (
			<Formik
				initialValues={{ company }}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
			>
				{props => <FormField {...props} _company={_company} />}
			</Formik>
		);
	}
}
