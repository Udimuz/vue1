import './bootstrap';
// import { createApp, h} from 'vue';
import { createApp} from 'vue';
// import store from './store'
import store from './store/index'
import * as VueRouter from "vue-router";

import Index from './components/Index.vue';
import HomeComponent from "./components/HomeComponent.vue";
import PostComponent from "./components/PostComponent.vue";
import TagComponent from "./components/TagComponent.vue";
import IndexPeople from './components/Person/Index.vue';
// const PeopleCompnt = () => import("./components/Person/Index.vue")

const routes = [
	// { path: '/people', component: function() { return import('@/components/Person/Index') }, name: 'person.index'},
	// { path: '/people', component: () => import("@/components/Person/Index"), name: 'person.index' },
	// { path: '/people', component: PeopleCompnt, name: 'person.index'},
	// { path: '/people', component: () => { return import('./components/Person/Index.vue') }, name: 'person.index'},
	// { path: '/people', component: function() { return import('@/components/Person/Index.vue') }, name: 'person.index'},
	{ path: '/people', component: () => import("./components/Person/Index.vue"), name: 'person.index' },
	{ path: '/people/create', component: () => import("./components/Person/Create.vue"), name: 'person.create' },
	{ path: '/people/:id/edit', component: () => import("./components/Person/Edit.vue"), name: 'person.edit' },
	{ path: '/people/:id', component: () => import("./components/Person/Show.vue"), name: 'person.show' },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory('/'),
	routes,
	//store
})

const app = createApp({
	// render: ()=>h(Index)
})

app.use(router)

// import Post1Component from './components/Post1Component.vue';
// app.component('post-component', Post1Component);

app.component('index', Index);

// Решил попробовать динамическое подключение, не сработало:
// app.component('index', function() { return import('@/components/Index.vue') });

app.use(store)

// app.use(store).mount('#my_app');	// app_dima
app.mount('#my_app');	// app_dima
