<template>
	<div class="w-25" v-if="person">
		<h3>Редактирование</h3>
		<div class="mb-3"><input type="text" id="name" v-model="this.person.name" class="form-control" placeholder="Имя"></div>
		<div class="mb-3"><input type="number" id="age" v-model="person.age" class="form-control" placeholder="Возраст"></div>
		<div class="mb-3"><input type="text" id="job" v-model="person.job" class="form-control" placeholder="Должность"></div>
		<div class="mb-3"><input :disabled="!isDisabled" type="button" @click.prevent="$store.dispatch('updatePerson', {id: person.id, name: person.name, age: person.age, job: person.job})" class="btn btn-primary" value="Обновить"></div>
	</div>
</template>

<script>
export default {
	name: "Edit",

	// Нужно проинициализировать наименования полей формы:
	// data() {
	// 	return {
	// 		name: null,
	// 		age: null,
	// 		job: null,
	// 	}
	// },

	mounted() {
		//this.getOnePerson()
		this.$store.dispatch('getOnePerson', this.$route.params.id)
		// console.log(this.person.name);
	},

	methods: {
		das() {
			console.log(this.person.name);
		},
		// getOnePerson() {
		// 	axios.get('/api/people/' + this.$route.params.id)
		// 			.then(myres => {
		// 				// this.name = myres.data.name
		// 				// Так как данные теперь обрабатываются через ресурс "PersonResource" нужно к структуре добавлять ещё ".data"
		// 				this.name = myres.data.data.name
		// 				this.age = myres.data.data.age
		// 				this.job = myres.data.data.job
		// 			})
		// },

		// updatePerson() {
		// 	axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
		// 			.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
		// 				//сделаем редирект на страницу с этим Пользователем:
		// 				this.$router.push({name: 'person.show', params: {id: this.$route.params.id}})
		// 			})
		// },
	},

	computed: {
		// Иметь ввиду: disabled - обрабатывает данные от противного. В случае получения "false", кнопка будет доступная
		// disabled спрашивает "Выключить кнопку?"
		isDisabled() {
			// Если значение "this.name==null", ничего не заполняли, то оно после преобразования (поверки данных) примет значение "false"
			// return this.name && this.age && this.job;
			//return this.person.name  &&  this.person.age  &&  this.person.job;
			// console.log(this.person.name);
			// console.log(this.$store.getters.isDisabled);
			return this.$store.getters.isDisabled
			// return this.$store.dispatch('isDisabled')
		},
		person() {
			return this.$store.getters.person
		}
	}
}
</script>

<style scoped>

</style>