<template>
	<tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
		<th scope="row">{{ person.id }}</th>
		<td><input type="text" v-model="name" class="form-control"></td>
		<td><input type="number" v-model="age" class="form-control"></td>
		<td><input type="text" v-model="job" class="form-control"></td>
		<td><a href="#" @click.prevent="updatePerson" class="btn btn-success">Обновить</a></td>
	</tr>
</template>

<script>
export default {
	name: "EditComponent",

	props: [
		'person'
	],

	data() {
		return {
			name: '',
			age: null,
			job: ''
		}
	},

	mounted() {
	},

	methods: {
		updatePerson() {
			axios.patch(`/api/people/${this.$parent.editPersonId}`, {name: this.name, age: this.age, job: this.job})
					.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
						this.$parent.getPeople()	// Чтобы изменения стали тут же видны, самый простой способ - обновить список вызвав эту функцию
					})
			this.$parent.editPersonId = null	// Нужно чтобы закрылись поля обновления
		},
	}

}
</script>