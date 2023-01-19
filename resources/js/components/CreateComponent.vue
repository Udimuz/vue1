<template>
	<div class="w-25">
		<div class="mb-3"><input type="text" id="name" v-model="name" class="form-control" placeholder="Имя"></div>
		<div class="mb-3"><input type="number" id="age" v-model="age" class="form-control" placeholder="Возраст"></div>
		<div class="mb-3"><input type="text" id="job" v-model="job" class="form-control" placeholder="Должность"></div>
		<div class="mb-3"><input type="button" @click.prevent="addPerson" class="btn btn-primary" value="Добавить"></div>
	</div>
</template>

<script>
export default {
	name: "CreateComponent",

	// Нужно проинициализировать наименования полей формы:
	data() {
		return {
			name: null,
			age: null,
			job: null,
		}
	},

	methods: {
		addPerson() {
			//console.log(this.name)
			axios.post('/api/people',{name: this.name, age: this.age, job: this.job})
					.then( res => {
						this.name = null; this.age = null; this.job = null;
						console.log(res);	// Посмотреть результат добавления
					})
		}
	}
}
</script>

<style scoped>

</style>