import * as Yup from "yup";
import validateAsync from "./validateAsync";

function songValidator(values) {
	const schema = Yup.object().shape({
		categoryIds: Yup.array().required("You must choose at least a Song"),
	});
	return validateAsync(schema, values);
}

export default songValidator;
