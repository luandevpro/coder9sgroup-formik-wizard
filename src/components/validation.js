import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	languages: Yup.array().required("Must have languages"),
});
