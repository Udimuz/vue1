<template>
	<div class="w-25">
		<h3>Редактирование</h3>
		<div class="mb-3"><input type="text" id="name" v-model="name" class="form-control" placeholder="Имя"></div>
		<div class="mb-3"><input type="number" id="age" v-model="age" class="form-control" placeholder="Возраст"></div>
		<div class="mb-3"><input type="text" id="job" v-model="job" class="form-control" placeholder="Должность"></div>
		<div class="mb-3"><input type="button" @click.prevent="updatePerson" class="btn btn-primary" value="Обновить"></div>
	</div>
</template>

<script>
export default {
	name: "Edit",

	// Нужно проинициализировать наименования полей формы:
	data() {
		return {
			name: null,
			age: null,
			job: null,
		}
	},

	mounted() {
		this.getOnePerson()
	},

	methods: {
		getOnePerson() {
			axios.get('/api/people/' + this.$route.params.id)
					.then(myres => {
						this.name = myres.data.name
						this.age = myres.data.age
						this.job = myres.data.job
					})
		},

		updatePerson() {
			axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
					.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
						//сделаем редирект на страницу с этим Пользователем:
						this.$router.push({name: 'person.show', params: {id: this.$route.params.id}})
					})
		},
	}
}
</script>

<style scoped>

</style>