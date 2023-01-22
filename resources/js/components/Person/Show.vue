<template>
	<div>
		<h3 style="color:darkred">Пользователь</h3>
		<div v-if="person" class="fs-5">
			<div class="mb-3"><b>Имя:</b> {{ this.person.name }}</div>
			<div class="mb-3"><b>Возраст:</b> {{ this.person.age }}</div>
			<div class="mb-3"><b>Должность:</b> {{ this.person.job }}</div>
			<router-link :to="{ name: 'person.edit', params: { id: this.person.id}}" class="btn btn-success">Изменить</router-link>
			<a @click.prevent="deletePerson(this.person.id)" href="" class="m-lg-3 btn btn-outline-danger">Удалить</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Show",

	data() {
		return {
			person: null
		}
	},

	mounted() {
		this.getOnePerson()
	},

	methods: {
		getOnePerson() {
			axios.get('/api/people/' + this.$route.params.id)
					.then(myres => {
						//this.person = myres.data
						this.person = myres.data.data 	// Так как данные теперь обрабатываются через ресурс "PersonResource" нужно к структуре добавлять ещё ".data"
						//console.log(this.person);
					})
		},
		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
					.then(_ => {
						this.$router.push({name: 'person.index'})	// После удаления перекинем (редирект) на страницу всех Пользователей
					})
		}
	}
}
</script>