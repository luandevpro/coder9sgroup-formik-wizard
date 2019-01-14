import React from "react";
import Select from "react-select";
import { ErrorMessage } from "formik";

class CustomSelect extends React.Component {
	state = {
		isLoading: false,
	};
	handleChange = value => {
		// this is going to call setFieldValue and manually update values.topcis
		this.props.onChange("company", value);
	};

	handleBlur = () => {
		// this is going to call setFieldTouched and manually update touched.topcis
		this.props.onBlur("company", true);
	};
	render() {
		return (
			<div className="form-group">
				<label>Topics (select at least 2) </label>
				<Select
					id="company"
					value={this.props.values.company}
					options={this.props._company}
					isMulti
					onChange={this.handleChange}
					onBlur={this.handleBlur}
				/>
				<ErrorMessage
					name="company"
					render={msg => <div style={{ color: "red" }}>{msg}</div>}
				/>
			</div>
		);
	}
}

export default CustomSelect;
