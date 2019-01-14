import React, { Component } from "react";
import Select from "../components/Select";
import Context from "../contexts";

export default class SelectContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return (
			<div>
				<Select _company={value.company} />
			</div>
		);
	}
}
