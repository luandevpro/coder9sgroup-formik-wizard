import React from "react";
import { FieldArray } from "formik";
import CustomCheckbox from "../form/fields/CustomCheckbox";

export default props => (
	<FieldArray name="categoryIds">
		{arrayHelpers => (
			<CustomCheckbox arrayHelpers={arrayHelpers} {...props} />
		)}
	</FieldArray>
);
