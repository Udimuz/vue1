<template>
	<div class="w-25">
		<h3>Create</h3>
		<div class="mb-3"><input type="text" id="name" v-model="person.name" class="form-control" placeholder="Имя"></div>
		<div class="mb-3"><input type="number" id="age" v-model="person.age" class="form-control" placeholder="Возраст"></div>
		<div class="mb-3"><input type="text" id="job" v-model="person.job" class="form-control" placeholder="Должность"></div>
		<div class="mb-3"><input :disabled="!isDisabled" type="button" @click.prevent="$store.dispatch('store', {name: person.name, age: person.age, job: person.job})" class="btn btn-primary" value="Добавить"></div>
	</div>
</template>

<script>
//import router from '...';
import {mapGetters} from 'vuex'
export default {
	name: "Create",

	// Нужно проинициализировать наименования полей формы:
	// data() {
	// 	return {
	// 		name: null,
	// 		age: null,
	// 		job: null,
	// 	}
	// },

	mounted() {
		// При открытии страницы, сначала нужно заполнить объект "person" пустыми данными:	Иначе будет показывать данные с прошлых страниц
		this.$store.commit('setPerson', {id: null, name: null, age: null, job: null})
	},

	methods: {
		// store() {
		// 	axios.post('/api/people',{name: this.name, age: this.age, job: this.job})
		// 			.then( res => {
		// 				// Не будем использовать очистку полей, а сделаем редирект на страницу списка Пользователей:
		// 				this.$router.push({name: 'person.index'})
		// 				//this.name = null; this.age = null; this.job = null;
		// 				//this.$parent.$refs.index.getPeople()
		// 			})
		// }
	},

	computed: {

		...mapGetters({
			isDisabled: "isDisabled",
			person: "person",
		})

		// // Иметь ввиду: disabled - обрабатывает данные от противного. В случае получения "false", кнопка будет доступная
		// // disabled спрашивает "Выключить кнопку?"
		// isDisabled() {
		// 	// Если значение "this.name==null", ничего не заполняли, то оно после преобразования (поверки данных) примет значение "false"
		// 	// А проверка типа данных в данном случае будет производиться в тегах, какой тип там указали:	type="text"
		// 	// return this.name && this.age && this.job;
		// 	//return this.person.name  &&  this.person.age  &&  this.person.job;
		// 	return this.$store.getters.isDisabled
		// },
		// person() {
		// 	return this.$store.getters.person
		// }
	}

}
</script>

<style scoped>

</style>