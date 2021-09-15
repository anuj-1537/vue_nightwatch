import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		selectedIndex: -1,
		selectedSchoolIndex: -1,
		studentData: [
			{
				name: "anuj deep",
				age: 23,
				gender: "male",
				qualification: "B.Tech",
				contact: 7004011477,
				dob: "1998-12-31",
				school: "JNV",
			},
			{
				name: "tom hardy",
				age: 34,
				gender: "male",
				qualification: "B.Sc",
				contact: 8989831733,
				dob: "1995-06-26",
				school: "DAV",
			},
		],
		selectedStudentData: {},
		schoolData: [
			{
				schoolName: "JNV",
				schoolId: "U72W",
				Addr: "Katihar",
			},
			{
				schoolName: "DAV",
				schoolId: "C56E",
				Addr: "Patna",
			},
		],
		showSchoolForm: false,
		showStudentForm: false,
	},
	mutations: {
		postStudentData(state, payload) {
			console.log("in mutations");

			state.studentData.push(payload);
		},
		changeSelectedIndex(state, payload) {
			console.log("index is changed to ", payload);

			state.selectedIndex = payload;
		},
		editSelectedIndex(state) {
			state.selectedIndex = -1;
		},
		editSelectedSchoolIndex(state) {
			state.selectedSchoolIndex = -1;
		},
		editStudentData(state, payload) {
			state.studentData.splice(state.selectedIndex, 1, payload);
		},
		editSchoolData(state, payload) {
			state.schoolData.splice(state.selectedSchoolIndex, 1, payload);
		},
		showForm(state, payload) {
			if (payload[0]) {
				state.showSchoolForm = true;
				state.showStudentForm = false;
			} else if (payload[1]) {
				state.showStudentForm = true;
				state.showSchoolForm = false;
			} else {
				state.showStudentForm = false;
				state.showSchoolForm = false;
			}
		},
		postSchoolData(state, payload) {
			console.log("in mutations");

			state.schoolData.push(payload);
		},
		changeSelectedSchoolIndex(state, payload) {
			console.log("index is changed to ", payload);

			state.selectedSchoolIndex = payload;
		},
	},
	getters: {
		getStudentData(state) {
			return state.studentData;
		},
		getSelectedIndex(state) {
			return state.selectedIndex;
		},
		getSchoolData(state) {
			return state.schoolData;
		},
		getFormStatus(state) {
			return [state.showSchoolForm, state.showStudentForm];
		},
		showEnrolledStudent: (state) => (school) => {
			console.log(
				state.studentData.filter((student) => student.school == school),
			);

			return state.studentData.filter(
				(student) => student.school == school,
			);
		},
		getSelectedSchoolIndex(state) {
			return state.selectedSchoolIndex;
		},
	},
});
