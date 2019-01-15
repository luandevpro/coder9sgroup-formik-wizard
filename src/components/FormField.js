import React from "react";
import { Form, FieldArray } from "formik";
import CustomUpload from "./CustomUpload";

export default props => (
	<Form>
		<FieldArray name="images">
			{arrayHelpers => (
				<CustomUpload arrayHelpers={arrayHelpers} {...props} />
			)}
		</FieldArray>
		<button type="submit">Submit</button>
	</Form>
);
