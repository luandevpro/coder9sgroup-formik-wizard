import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";
import moment from "moment";

export default class Radio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: [],
		};
	}
	handleSubmit = values => {
		var date = moment(values.date);
		console.log(date.format("DD-MM-YYYY"));
	};
	render() {
		var { date } = this.state;
		return (
			<Formik initialValues={{ date }} onSubmit={this.handleSubmit}>
				{props => <FormField {...props} />}
			</Formik>
		);
	}
}
