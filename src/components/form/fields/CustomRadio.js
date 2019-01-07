import React from "react";
import { ErrorMessage } from "formik";
import styled from "styled-components";

export default props =>
	console.log(props) || (
		<div>
			{props.languages.map((languages, index) => (
				<CustomWrappers key={index}>
					<input
						type="radio"
						id={languages.name}
						name="languages"
						checked={props.arrayHelpers.form.values.languages.includes(
							languages.name
						)}
						onChange={e => {
							if (
								e.target.checked &&
								props.arrayHelpers.form.values.languages.length === 0
							)
								props.arrayHelpers.push(languages.name);
							else {
								props.arrayHelpers.replace(0, languages.name);
							}
						}}
					/>
					<label htmlFor={languages.name}>{languages.name}</label>
				</CustomWrappers>
			))}
			<ErrorMessage
				name="languages"
				render={msg => <div className="text-danger">{msg}</div>}
			/>
		</div>
	);

export const CustomWrappers = styled.div`
	input[type="radio"] {
		display: none;
	}
	label:before {
		content: "\f1db";
		font-family: "FontAweSome";
		font-size: 26px;
	}
	input[type="radio"]:checked + label:before {
		content: "\f058";
		font-family: "FontAweSome";
		font-size: 26px;
		color: blue;
	}
`;
