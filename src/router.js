import Vue from "vue";
import VueRouter from "vue-router";
import School from "./components/school.vue";
import Student from "./components/Form.vue";
import Home from "./components/home.vue";
Vue.use(VueRouter);
const routes = [
	{ path: "/school", component: School },
	{ path: "/student", component: Student },
	{ path: "/", component: Home },
];
export const router = new VueRouter({
	routes,
	mode: "history",
});
