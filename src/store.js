import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
				imageUrl:"https://res.cloudinary.com/codermj/image/upload/v1632977894/flwai3lwa4lmki25kigx.jpg"
			},
			{
				name: "tom hardy",

				gender: "male",
				qualification: "B.Sc",
				contact: 8989831733,
				dob: "1995-06-26",
				school: "DAV",
				age: 26,
				imageUrl:"https://res.cloudinary.com/codermj/image/upload/v1632977672/ucykmsnmegkwhyddxoz8.png"
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
		cards: [],
	},
	mutations: {
		postStudentData(state, payload) {
			

			state.studentData.push(payload);
		},
		changeSelectedIndex(state, payload) {

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

			state.schoolData.push(payload);
		},
		changeSelectedSchoolIndex(state, payload) {
			
			state.selectedSchoolIndex = payload;
		},
		SET_ITEMS(state, cards) {
			state.cards = cards;
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

			return [state.showSchoolTable, state.showStudentTable];
		},
		showEnrolledStudent: (state) => (school) => {
			
			return state.studentData.filter(
				(student) => student.school == school,
			);
		},
		getSelectedSchoolIndex(state) {
			return state.selectedSchoolIndex;
		},
		getCards: (state) => {
			return state.cards;
		},
	},
	actions: {
		async loadCards({ commit }) {
			try {
				let num = Math.floor(Math.random() * 10) + 1;
				const response = await axios.get(
					"https://random-data-api.com/api/business_credit_card/random_card?size=" +
						num,
				);
				//calling mutations in actions
				commit("SET_ITEMS", response.data);
			} catch (error) {
				console.log(error);
			}
		},
	},
});
