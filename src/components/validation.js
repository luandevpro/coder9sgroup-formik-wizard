import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	languages: Yup.array()
		.required("Must have languages")
		.min(2, "Minimum of 2 languages"),
});
