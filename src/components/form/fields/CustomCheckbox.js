import React from "react";
import { ErrorMessage } from "formik";
import styled from "styled-components";

export default props => (
	<CustomGrip>
		{props.categories.map((category, index) => (
			<CustomWrapper key={index}>
				<input
					name="categoryIds"
					type="checkbox"
					id={category.name}
					value={category.name}
					checked={props.arrayHelpers.form.values.categoryIds.includes(
						category.name
					)}
					onChange={e => {
						if (e.target.checked) props.arrayHelpers.push(category.name);
						else {
							const idx = props.arrayHelpers.form.values.categoryIds.indexOf(
								category.name
							);
							props.arrayHelpers.remove(idx);
						}
					}}
				/>
				<Label htmlFor={category.name} image={category.image}>
					{category.name}
				</Label>
			</CustomWrapper>
		))}
		<ErrorMessage
			name="categoryIds"
			render={msg => <div className="text-danger">{msg}</div>}
		/>
	</CustomGrip>
);
export const CustomGrip = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

export const Label = styled.label`
	&:before {
		content: " ";
		font-family: "FontAweSome";
		font-size: 26px;
		background: url(${props => props.image}) no-repeat;
		display: inline-block;
		width: 380px;
		height: 200px;
	}
`;
export const CustomWrapper = styled.div`
	width: 100%;
	input[type="checkbox"] {
		display: none;
	}
	input[type="checkbox"]:checked + label:before {
		display: flex;
		justify-items: center;
		padding-top: 10px;
		content: "\f00c";
		font-family: "FontAweSome";
		font-size: 105px;
		color: rgba(0, 0, 0, 1);
		justify-content: center;
		background-color: rgba(255, 0, 0, 0.1);
		z-index: 0;
	}
`;
