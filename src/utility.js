function getAge(dob) {
	if (dob !== "" || typeof dob !== "undefined") {
		let today = new Date();
		let birthDate = new Date(dob);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		

		return age;
	}
	return 0;
}
let baseApiUrl = "https://api.cloudinary.com/v1_1/codermj/upload";
let CLOUDINARY_UPLOAD_PRESET = "n8hb45ip";
let letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
module.exports = { getAge ,baseApiUrl,CLOUDINARY_UPLOAD_PRESET,letters};
