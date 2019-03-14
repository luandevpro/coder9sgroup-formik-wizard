import React, { Component } from "react";
import Draft from "../components/Draft";
import Context from "../contexts";

export default class DraftContainer extends Component {
	static contextType = Context;
	render() {
		return (
			<div>
				<Draft />
			</div>
		);
	}
}
