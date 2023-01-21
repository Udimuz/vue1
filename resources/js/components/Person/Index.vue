<template>
	<div>
		<h3>Список</h3>
		<table class="table">
			<thead>
			<tr>
				<th scope="col">№</th>
				<th scope="col">Имя</th>
				<th scope="col">Возраст</th>
				<th scope="col">Должность</th>
				<th scope="col">Операции</th>
			</tr>
			</thead>
			<tbody>
			<template v-for="personOwn in people">
				<tr>
					<td>{{ personOwn.id }}</td>
					<td>
						<router-link :to="{ name: 'person.show', params: { id: personOwn.id}}">{{ personOwn.name }}</router-link>
					</td>
					<td>{{ personOwn.age }}</td>
					<td>{{ personOwn.job }}</td>
					<td>
						<router-link :to="{ name: 'person.edit', params: { id: personOwn.id}}" class="btn btn-success">Изменить</router-link>
						<a @click.prevent="deletePerson(personOwn.id)" href="" class="m-lg-3 btn btn-outline-danger">Удалить</a>
					</td>
				</tr>
			</template>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "Index",

	data() {
		return {
			people: null,
		}
	},

	mounted() {
		this.getPeople()
	},

	methods: {
		getPeople() {
			axios.get('/api/people')
					.then(myres => {
						//console.log(myres.data);
						this.people = myres.data
					})
		},
		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
					.then(_ => {
						this.getPeople()	// Чтобы изменения стали тут же видны, самый простой способ - обновить список вызвав эту функцию
					})
		},
	}

	}
</script>

<style scoped>

</style>