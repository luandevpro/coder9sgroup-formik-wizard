import React, { Component } from "react";
import { Formik } from "formik";

export default class FormWizard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			categoryIds: [],
			languages: [],
		};
	}
	handleSubmit = (values, bag) => {
		if (
			this.props.children.props.activeStepIndex ===
			React.Children.count(this.props.children.props.children) - 1
		) {
			console.log(values, bag);
		} else {
			this.props.children.props._activeStepIndex({
				type: "ACTIVE_STEP_INDEX",
				payload: 1,
			});
		}
	};
	validate = values => {
		const activePage = React.Children.toArray(
			this.props.children.props.children
		)[this.props.children.props.activeStepIndex];
		// var x = activePage.props.validate(values);
		return activePage.props.validate ? activePage.props.validate(values) : {};
	};
	render() {
		var { email, categoryIds, languages } = this.state;
		var { children } = this.props;
		return (
			<Formik
				initialValues={{ email, categoryIds, languages }}
				onSubmit={this.handleSubmit}
				validate={this.validate}
			>
				{children}
			</Formik>
		);
	}
}
