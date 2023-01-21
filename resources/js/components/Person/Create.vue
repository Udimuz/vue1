<template>
	<div class="w-25">
		<h3>Create</h3>
		<div class="mb-3"><input type="text" id="name" v-model="name" class="form-control" placeholder="Имя"></div>
		<div class="mb-3"><input type="number" id="age" v-model="age" class="form-control" placeholder="Возраст"></div>
		<div class="mb-3"><input type="text" id="job" v-model="job" class="form-control" placeholder="Должность"></div>
		<div class="mb-3"><input type="button" @click.prevent="store" class="btn btn-primary" value="Добавить"></div>
	</div>
</template>

<script>
//import router from '...';
export default {
	name: "Create",

	// Нужно проинициализировать наименования полей формы:
	data() {
		return {
			name: null,
			age: null,
			job: null,
		}
	},

	methods: {
		store() {
			//console.log(this.name)
			axios.post('/api/people',{name: this.name, age: this.age, job: this.job})
					.then( res => {
						// Не будем использовать очистку полей, а сделаем редирект на страницу списка Пользователей:
						this.$router.push({name: 'person.index'})
						//this.name = null; this.age = null; this.job = null;
						//this.$parent.$refs.index.getPeople()
					})
		}
	}

}
</script>

<style scoped>

</style>