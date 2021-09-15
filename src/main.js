import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import VueRouter from "vue-router";
import School from "./components/school.vue";
import Student from "./components/Form.vue";
import Home from "./components/home.vue";
Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
	{ path: "/school", component: School },
	{ path: "/student", component: Student },
	{ path: "/", component: Home },
];
const router = new VueRouter({
	routes,
	mode: "history",
});
new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount("#app");
