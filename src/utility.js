function getAge(dob) {
	if (dob !== "" || typeof dob !== "undefined") {
		let today = new Date();
		let birthDate = new Date(dob);
		let age = today.getFullYear() - birthDate.getFullYear();
		let m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		console.log(age);

		return age;
	}
	return 0;
}
module.exports = { getAge };
