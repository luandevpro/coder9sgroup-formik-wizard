import React, { Component } from "react";
import Language from "../../components/stepper/Language";
import Context from "../../contexts";

export default class LanguageContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return <Language languages={value.languages} />;
	}
}
