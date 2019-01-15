import React from "react";
import Dropzone from "react-dropzone";
import { storage } from "../config/firebase";
import { map } from "lodash";

const baseStyle = {
	width: 200,
	height: 200,
	borderWidth: 2,
	borderColor: "#666",
	borderStyle: "dashed",
	borderRadius: 5,
};
const activeStyle = {
	borderStyle: "solid",
	borderColor: "#6c6",
	backgroundColor: "#eee",
};
const rejectStyle = {
	borderStyle: "solid",
	borderColor: "#c66",
	backgroundColor: "#eee",
};

export default props =>
	console.log(props) || (
		<div>
			<Dropzone
				accept="image/*"
				multiple={true}
				onDrop={acceptedFiles => {
					if (acceptedFiles.length === 0) {
						return;
					}
					props.arrayHelpers.form.setFieldValue(
						props.arrayHelpers.name,
						map(acceptedFiles, acceptedFiles => {
							storage
								.ref("/user-image")
								.child(acceptedFiles.name)
								.put(acceptedFiles, {
									contentType: acceptedFiles.type,
								})
								.then(snapshot => {
									snapshot.ref.getDownloadURL().then(url => {
										console.log(url);
										props.arrayHelpers.push(url);
									});
								});
						})
					);
				}}
			>
				{({
					getRootProps,
					getInputProps,
					isDragActive,
					isDragAccept,
					isDragReject,
				}) => {
					let styles = { ...baseStyle };
					styles = isDragActive ? { ...styles, ...activeStyle } : styles;
					styles = isDragReject ? { ...styles, ...rejectStyle } : styles;

					return (
						<div {...getRootProps()} style={styles}>
							<input {...getInputProps()} />
							<div>{isDragAccept ? "Drop" : "Drag"} files here...</div>
							{isDragReject && <div>Unsupported file type...</div>}
						</div>
					);
				}}
			</Dropzone>
			<div>
				{map(props.values.images, (img, index) => {
					if (img === undefined)
						return props.arrayHelpers.form.values.images.splice(index, 1);
					return (
						<div key={index}>
							<img
								src={img}
								alt=""
								style={{ width: "300px", height: "300px" }}
							/>
							<button onClick={() => props.arrayHelpers.remove(index)}>
								delete
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
