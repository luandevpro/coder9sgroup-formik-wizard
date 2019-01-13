import React from "react";
import { ErrorMessage } from "formik";

export default props => (
	<div>
		{props._languages.map((_language, index) => (
			<div key={index}>
				<input
					name="languages"
					type="checkbox"
					id={_language}
					value={_language}
					checked={props.arrayHelpers.form.values.languages.includes(
						_language
					)}
					onChange={e => {
						if (e.target.checked) props.arrayHelpers.push(_language);
						else {
							const idx = props.arrayHelpers.form.values.languages.indexOf(
								_language
							);
							props.arrayHelpers.remove(idx);
						}
					}}
				/>
				<label htmlFor={_language}>{_language}</label>
			</div>
		))}
		<ErrorMessage
			name="languages"
			render={msg => <div className="text-danger">{msg}</div>}
		/>
		<button type="submit">Submit</button>
	</div>
);
