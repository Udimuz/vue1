<template>
	<div>
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
			<template v-for="person in people">
				<tr :class="isEdit(person.id) ? 'd-none' : ''">
					<th scope="row">{{ person.id }}</th>
					<td>{{ person.name }}</td>
					<td>{{ person.age }}</td>
					<td>{{ person.job }}</td>
					<td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-success">Изменить</a> &nbsp;
							<a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Удалить</a></td>
				</tr>
				<tr :class="isEdit(person.id) ? '' : 'd-none'">
					<th scope="row">{{ person.id }}</th>
					<td><input type="text" v-model="name" class="form-control"></td>
					<td><input type="number" v-model="age" class="form-control"></td>
					<td><input type="text" v-model="job" class="form-control"></td>
					<td><a href="#" @click.prevent="updatePerson" class="btn btn-success">Обновить</a></td>
				</tr>
			</template>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: "IndexComponent",

	data() {
		return {
			people: null,
			editPersonId: null,
			name: '', // или можно иниц как null, без разницы
			age: null,
			job: ''
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
		isEdit(id) {	// Сравнение "===" сравнивает также типы данных
			return this.editPersonId === id
		},
		changeEditPersonId(id, name, age, job) {
			this.editPersonId = id
			this.name = name
			this.age = age
			this.job = job
		},
		updatePerson() {
			axios.patch(`/api/people/${this.editPersonId}`, {name: this.name, age: this.age, job: this.job})
					.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
						this.getPeople()	// Чтобы изменения стали тут же видны, самый простой способ - обновить список вызвав эту функцию
					})
			this.editPersonId = null	// Нужно чтобы закрылись поля обновления
		},
		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
					.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
						this.getPeople()	// Чтобы изменения стали тут же видны, самый простой способ - обновить список вызвав эту функцию
					})
		}
	}

}
</script>