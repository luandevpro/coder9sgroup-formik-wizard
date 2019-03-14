import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export default class Draft extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: new EditorState.createEmpty(),
		};
	}
	handleSubmit = (values, { resetForm }) => {
		const rawContentState = convertToRaw(
			values.editorState.getCurrentContent()
		);
		const editorState = EditorState.createWithContent(
			convertFromRaw(rawContentState)
		);
		this.setState({
			editorState,
		});
		resetForm({
			editorState: new EditorState.createEmpty(),
		});
	};
	render() {
		var { editorState } = this.state;
		return (
			<div>
				<Formik
					initialValues={{ editorState }}
					onSubmit={this.handleSubmit}
				>
					{props => <FormField {...props} />}
				</Formik>
				<div>
					{draftToHtml(
						convertToRaw(this.state.editorState.getCurrentContent())
					)}
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: draftToHtml(
							convertToRaw(this.state.editorState.getCurrentContent())
						),
					}}
				/>
			</div>
		);
	}
}
