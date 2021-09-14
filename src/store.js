import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		selectedIndex: -1,
		studentData: [
			{
				name: "anuj deep",
				age: 23,
				gender: "male",
				qualification: "B.Tech",
				contact: 7004011477,
				dob: "1998-12-31",
			},
			{
				name: "tom hardy",
				age: 34,
				gender: "male",
				qualification: "B.Sc",
				contact: 8989831733,
				dob: "1995-06-26",
			},
		],
		selectedStudentData: {},
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
		editStudentData(state, payload) {
			state.studentData.splice(state.selectedIndex, 1, payload);
		},
	},
	getters: {
		getStudentData(state) {
			return state.studentData;
		},
		getSelectedIndex(state) {
			return state.selectedIndex;
		},
	},
});
