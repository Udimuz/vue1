<template>
	<div>
		<h3 style="color:darkred">Пользователь</h3>
		<div v-if="person.id" class="fs-5">
			<div class="mb-3"><b>Имя:</b> {{ person.name }}</div>
			<div class="mb-3"><b>Возраст:</b> {{ person.age }}</div>
			<div class="mb-3"><b>Должность:</b> {{ person.job }}</div>
			<router-link :to="{ name: 'person.edit', params: { id: person.id}}" class="btn btn-success">Изменить</router-link>
			<a @click.prevent="deletePerson(person.id)" href="" class="m-lg-3 btn btn-outline-danger">Удалить</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Show",

	// Закомментировано: Теперь параметры собираются в блоке "computed"
	// data() {
	// 	return {
	// 		person: null
	// 	}
	// },

	mounted() {
		//this.getOnePerson()
		// this.$store.commit('setPerson', {id: null, name: null, age: null, job: null})
		// console.log(this.$route.params.id);
		//console.log(this.person);
		// Теперь методы работают из VueX:
		this.$store.dispatch('getOnePerson', this.$route.params.id)
	},

	methods: {
		// getOnePerson() {
		// 	axios.get('/api/people/' + this.$route.params.id)
		// 			.then(myres => {
		// 				//this.person = myres.data
		// 				this.person = myres.data.data 	// Так как данные теперь обрабатываются через ресурс "PersonResource" нужно к структуре добавлять ещё ".data"
		// 				//console.log(this.person);
		// 			})
		// },
		// <button @click="das(person.id)">123</button>
		das(id) {
			alert(id);
		},
		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
					.then(_ => {
						this.$router.push({name: 'person.index'})	// После удаления перекинем (редирект) на страницу всех Пользователей
					})
		}
	},

	computed: {
		person() {
			// console.log(this.$store.getters.person);
			return this.$store.getters.person
		}
	}

}
</script>