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

				gender: "male",
				qualification: "B.Tech",
				contact: 7004011477,
				dob: "1998-12-31",
				school: "JNV",
				age: 23,
			},
			{
				name: "tom hardy",

				gender: "male",
				qualification: "B.Sc",
				contact: 8989831733,
				dob: "1995-06-26",
				school: "DAV",
				age: 26,
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
		showSchoolTable: false,
		showStudentTable: false,
		today: new Date(),
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
		showTable(state, payload) {
			console.log("in showTable");

			if (payload[0]) {
				state.showSchoolTable = true;
				state.showStudentTable = false;
				console.log("show school Table");
			} else if (payload[1]) {
				state.showStudentTable = true;
				state.showSchoolTable = false;
				console.log("show student Table");
			} else {
				state.showStudentTable = false;
				state.showSchoolTable = false;
				console.log("no Table");
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
		getTableStatus(state) {
			console.log("in getTableStatus");

			return [state.showSchoolTable, state.showStudentTable];
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
