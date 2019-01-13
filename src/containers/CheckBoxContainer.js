import React, { Component } from "react";
import CheckBox from "../components/CheckBox";
import Context from "../contexts";

export default class CheckBoxContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return (
			<div>
				<CheckBox _languages={value.languages} />
			</div>
		);
	}
}
