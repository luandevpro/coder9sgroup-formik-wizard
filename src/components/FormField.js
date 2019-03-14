import React from "react";
import { Form } from "formik";
import CustomDraft from "./CustomDraft";

export default props => (
	<Form>
		<CustomDraft {...props} />
		<button type="submit">Submit</button>
	</Form>
);
