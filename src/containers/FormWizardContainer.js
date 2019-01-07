import React, { Component } from "react";
import FormWizard from "../components/FormWizard";
import Context from "../contexts";
import FormField from "../components/FormField";

export default class FormWizardContainer extends Component {
	static contextType = Context;
	showFormField = (props, activeStepIndex, _activeStepIndex) => {
		return (
			<FormField
				{...props}
				activeStepIndex={activeStepIndex}
				_activeStepIndex={_activeStepIndex}
			/>
		);
	};
	render() {
		var value = this.context;
		return (
			<FormWizard {...this.props}>
				{this.showFormField(
					this.props,
					value.activeStepIndex,
					value._activeStepIndex
				)}
			</FormWizard>
		);
	}
}
