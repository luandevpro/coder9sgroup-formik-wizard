import React from "react";
import { Form, FieldArray } from "formik";
import CustomCheckBox from "./CustomCheckBox";

export default props => (
	<Form>
		<FieldArray name="languages">
			{arrayHelpers => (
				<CustomCheckBox arrayHelpers={arrayHelpers} {...props} />
			)}
		</FieldArray>
	</Form>
);
