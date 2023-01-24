
//import VueRouter from "vue-router";
import { createApp } from 'vue';
import * as VueRouter from "vue-router";
import PostComponent from "./components/PostComponent.vue";

const routes = [
	{
		path: '/posts', component: PostComponent
	}
]
const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory('/'),
	routes
})

const app = createApp({})

app.use(router)

// import PostComponent from './components/PostComponent.vue';
// app.component('post-component', PostComponent);

// export default new VueRouter({
// 	mode: 'history',
//
// 	routes: [
// 		{
// 			path: '/posts', component: PostComponent
// 		}
// 	]
// })