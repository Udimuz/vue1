<template>
	<tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
		<th scope="row">{{ person.id }}</th>
		<td>{{ person.name }}</td>
		<td>{{ person.age }}</td>
		<td>{{ person.job }}</td>
		<td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-success">Изменить</a> &nbsp;
			<a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Удалить</a></td>
	</tr>
</template>

<script>
export default {
	name: "ShowComponent",

	props: [
		'person'
	],

	methods: {
		changeEditPersonId(id, name, age, job) {
			this.$parent.editPersonId = id
			// Дотянуться до компонента можно только так:
			//this.$refs.edit_1[0].name = name
			let editName = `edit_${id}`
			let fullName = this.$parent.$refs[editName][0];	// Важно, здесь выйти на компонент можно только через квадратные скобки, если для него собиралось имя в отдельной переменной
			fullName.name = name
			fullName.age = age
			fullName.job = job
		},
		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
					.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
						this.$parent.getPeople()	// Чтобы изменения стали тут же видны, самый простой способ - обновить список вызвав эту функцию
					})
		},
	}

}
</script>

<style scoped>

</style>