import firebase from "firebase/app";
import "firebase/storage";

var config = {
	apiKey: "AIzaSyD3-dJgBKQWg0wnMxh-9HbClGXzi7vL48w",
	authDomain: "react-dropzone-coder9sgroup.firebaseapp.com",
	databaseURL: "https://react-dropzone-coder9sgroup.firebaseio.com",
	projectId: "react-dropzone-coder9sgroup",
	storageBucket: "react-dropzone-coder9sgroup.appspot.com",
	messagingSenderId: "885732109426",
};
firebase.initializeApp(config);

export default firebase;

export const storage = firebase.storage();
