import React from "react";
import { Form } from "formik";
import CustomDate from "./CustomDate";

export default props => (
	<Form>
		<CustomDate name="date" {...props} />
		<button type="submit">Submit</button>
	</Form>
);
