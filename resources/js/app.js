//import './bootstrap';
import { createApp } from 'vue';
import * as VueRouter from "vue-router";

import Index from './components/Index.vue';
import HomeComponent from "./components/HomeComponent.vue";
import PostComponent from "./components/PostComponent.vue";
import TagComponent from "./components/TagComponent.vue";

const routes = [
	//{ path: '/', component: Index },
	{ path: '/', component: HomeComponent },
	{ path: '/posts', component: PostComponent },
	{ path: '/tags', component: TagComponent },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory('/'),
	routes
})

const app = createApp({})

app.use(router)

// import Post1Component from './components/Post1Component.vue';
// app.component('post-component', Post1Component);

app.component('index', Index);

app.mount('#app');	// app_dima
