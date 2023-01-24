//Не удалось запустить редирект, пробовал так: адрес в браузере меняется, но открытия страницы не происходит, не перекидывает
import * as VueRouter from "vue-router";
const routes = [
	{ path: '/people', component: () => import("../../components/Person/Index.vue"), name: 'person.index' },
	{ path: '/people/:id', component: () => import("@/components/Person/Show.vue"), name: 'person.show' },
]
const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory('/'),
	routes,
})


// Дата:
const state = {
	person: {
		id: null,
		name: null, age: null, job: null
	},
	people: null,
}
// Методы:	переносим сюда из компонентов
const actions = {
	// задействуется метод с зарезервированным именем "commit"
	//getOnePerson(commit, id) {
	getOnePerson({state, commit, dispatch}, id) {
		//console.log(id);
		axios.get(`/api/people/${id}`)
			.then(myres => {
				//console.log(myres.data.data);
				commit('setPerson', myres.data.data)
				// Теперь "myres.data.data" попадёт в "person"
				//this.person = myres.data.data
			})
	},
	getPeople({commit}) {
		axios.get('/api/people')
			.then(myres => {
				commit('setPeople', myres.data.data)
			})
	},
	// Если хотим вызывать какой-то метод из этих Экшенов (здесь getPeople) мы это должны делать за счёт "dispatch"
	deletePerson({dispatch}, id) {
		axios.delete(`/api/people/${id}`)
			.then(_ => {
				dispatch('getPeople')	// Чтобы изменения стали тут же видны, обновить список вызвав функцию getPeople() таким образом
				// Хотелось бы научиться тут делать редирект, на страницу "Список пользователей": Нужно при удалении из компонента Show.vue
				//this.$router.push({name: 'person.index'})
			})
	},
	// Нужно дать в аргумент хотя бы пустышку {}
	updatePerson({}, data) {
		axios.patch(`/api/people/${data.id}`, {name: data.name, age: data.age, job: data.job})
			.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
				//сделаем редирект на страницу с этим Пользователем:
				// this.$router.push({name: 'person.show', params: {id: data.id}})
				// router.push({name: 'person.show', params: {id: data.id}})
				// router.push({name: 'person.index'})
			})
	},
	store({}, data) {
		axios.post('/api/people',{name: data.name, age: data.age, job: data.job})
			.then( res => {
				router.push({name: 'person.index'})
			})
	}
}
// Зарезервированный объект - геттеры:
const getters = {
	// person: state => {
	// 	return state.person
	// }
	// Более сокращённая запись этого геттера:	Если используется одинаковое слово "state", можно его опустить
	// person: () => state.person	- Но у меня так не сработало
	person: state => state.person, 	//	Получилось только с таким вариантом, сам придумал
	people: state => state.people,
	// Эта функция на обработку изменений в полях, работает только если указан "state =>". Сокращённый вариант как у учителя - не активируется, целый час мучался.
	isDisabled: state => {
		// console.log('name: '+state.person.name)
		// console.log(!(state.person.job).isNull);
		return state.person.name  &&  state.person.age  &&  state.person.job
		// в Javascript такие проверки на пустоту не проходят:	return (!empty(state.person.name)  &&  !state.person.age.isEmpty  &&  !state.person.job.isEmpty)
		// return (state.person.name !== ''  &&  state.person.age !== ''  &&  state.person.job !== '')
	},
	isDisabled2: () => {
		// console.log('name: '+state.person.name)
		//console.log(state.person.name);
		//return state.person.name  &&  state.person.age  &&  state.person.job
		//return (state.person.name != null  &&  state.person.age != null  &&  state.person.job != null)
	},
}
// Зарезервированный объект - геттеры:
const mutations = {
	setPerson(state, person) {
		state.person = person
		// console.log(person);
	},
	setPeople(state, people) {
		state.people = people
	}
}
// Экспортировать в вызываемый файл (import Person from) с перечислением, что туда надо передать:
export default {
	// namespace: true,
	state, actions, getters, mutations
}