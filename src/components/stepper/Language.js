import React, { Component } from "react";
import { FieldArray } from "formik";
import CustomRadio from "../form/fields/CustomRadio";

export default class Language extends Component {
	render() {
		return (
			<div className="form-group">
				<FieldArray name="languages" className="form-control">
					{arrayHelpers => (
						<CustomRadio arrayHelpers={arrayHelpers} {...this.props} />
					)}
				</FieldArray>
			</div>
		);
	}
}
