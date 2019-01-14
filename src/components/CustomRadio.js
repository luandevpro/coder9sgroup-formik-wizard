import React from "react";
import { ErrorMessage } from "formik";

export default props => (
	<div>
		{props._languages.map((_language, index) => (
			<div key={index}>
				<input
					name="languages"
					type="radio"
					id={_language}
					value={_language}
					checked={props.arrayHelpers.form.values.languages.includes(
						_language
					)}
					onChange={e => {
						if (
							e.target.checked &&
							props.arrayHelpers.form.values.languages.length === 0
						)
							props.arrayHelpers.push(_language);
						else {
							props.arrayHelpers.replace(0, _language);
						}
					}}
				/>
				<label htmlFor={_language}>{_language}</label>
			</div>
		))}
		<ErrorMessage
			name="languages"
			render={msg => (
				<div style={{ color: "red" }} className="text-danger">
					{msg}
				</div>
			)}
		/>
		<button type="submit">Submit</button>
	</div>
);
