import React, { Component } from "react";
import Radio from "../components/Radio";
import Context from "../contexts";

export default class RadioContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return (
			<div>
				<Radio _languages={value.languages} />
			</div>
		);
	}
}
