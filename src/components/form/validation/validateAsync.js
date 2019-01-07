function validateAsync(schema, values) {
	return schema
		.validate(values, { abortEarly: false })
		.then(() => undefined)
		.catch(errors => {
			let preparedErrors = {};
			errors.inner.map(
				error => (preparedErrors[error.path] = error.message)
			);

			throw preparedErrors;
		});
}

export default validateAsync;
