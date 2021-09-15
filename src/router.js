import Vue from "vue";
import VueRouter from "vue-router";
import School from "./components/school.vue";
import Student from "./components/Form.vue";
import Home from "./components/home.vue";
import CardData from "./components/card.vue";
Vue.use(VueRouter);
const routes = [
	{ path: "/school", component: School },
	{ path: "/student", component: Student },
	{ path: "/cardData", component: CardData },
	{ path: "/", component: Home },
];
export const router = new VueRouter({
	routes,
	mode: "history",
});
