import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";
import { validationSchema } from "./validation";

export default class Radio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
				"https://firebasestorage.googleapis.com/v0/b/react-dropzone-coder9sgroup.appspot.com/o/user-image%2FScreenshot%20from%202019-01-10%2022-37-10.png?alt=media&token=9b9fb662-0fc4-4a91-8036-8031d3373cfb",
			],
		};
	}
	handleSubmit = values => {
		console.log(JSON.stringify(values, null, 2));
	};
	render() {
		var { images } = this.state;
		return (
			<Formik
				initialValues={{ images }}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
			>
				{props => <FormField {...props} />}
			</Formik>
		);
	}
}
