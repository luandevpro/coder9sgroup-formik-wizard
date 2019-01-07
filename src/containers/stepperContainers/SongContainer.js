import React, { Component } from "react";
import Song from "../../components/stepper/Song";
import Context from "../../contexts";

export default class SongContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return <Song categories={value.categories} />;
	}
}
