import React, { Component } from "react";
import Date from "../components/Date";
import Context from "../contexts";

export default class SelectContainer extends Component {
	static contextType = Context;
	render() {
		return (
			<div>
				<Date />
			</div>
		);
	}
}
