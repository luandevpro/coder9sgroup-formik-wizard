import React from "react";
import { Form } from "formik";
import CustomSelect from "./CustomSelect";

export default props => (
	<Form>
		<CustomSelect
			name="company"
			value={props.values.topics}
			onChange={props.setFieldValue}
			onBlur={props.setFieldTouched}
			{...props}
		/>
		<button type="submit">Submit</button>
	</Form>
);
