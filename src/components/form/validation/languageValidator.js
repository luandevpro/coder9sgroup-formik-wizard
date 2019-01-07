import * as Yup from "yup";
import validateAsync from "./validateAsync";

function languageValidator(values) {
	const schema = Yup.object().shape({
		languages: Yup.array().required("You must choose a Language"),
	});
	return validateAsync(schema, values);
}

export default languageValidator;
