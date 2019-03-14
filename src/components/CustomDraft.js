import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class CustomDraft extends React.Component {
	render() {
		return (
			<div className="form-group" style={{ width: "80%" }}>
				<Editor
					editorState={this.props.values.editorState}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={editorState =>
						this.props.setFieldValue("editorState", editorState)
					}
				/>
			</div>
		);
	}
}

export default CustomDraft;
