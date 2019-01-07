import * as Yup from "yup";
import validateAsync from "./validateAsync";

function emailValidator(values) {
	const schema = Yup.object().shape({
		email: Yup.string()
			.required("Email is required")
			.email("Email not valid"),
	});

	return validateAsync(schema, values);
}

export default emailValidator;
