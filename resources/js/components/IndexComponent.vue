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
				<ShowComponent :person="person"></ShowComponent>
				<!--tr :class="isEdit(person.id) ? 'd-none' : ''">
					<th scope="row">{{ person.id }}</th>
					<td>{{ person.name }}</td>
					<td>{{ person.age }}</td>
					<td>{{ person.job }}</td>
					<td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-success">Изменить</a> &nbsp;
							<a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Удалить</a></td>
				</tr-->
				<EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
				<!--tr :class="isEdit(person.id) ? '' : 'd-none'">
					<th scope="row">{{ person.id }}</th>
					<td><input type="text" v-model="name" class="form-control"></td>
					<td><input type="number" v-model="age" class="form-control"></td>
					<td><input type="text" v-model="job" class="form-control"></td>
					<td><a href="#" @click.prevent="updatePerson" class="btn btn-success">Обновить</a></td>
				</tr-->
			</template>
			</tbody>
		</table>
	</div>
</template>

<script>
import ShowComponent from "@/components/ShowComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
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
		//this.$parent.parentLog()
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
		updatePerson() {
			axios.patch(`/api/people/${this.editPersonId}`, {name: this.name, age: this.age, job: this.job})
					.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
						this.getPeople()	// Чтобы изменения стали тут же видны, самый простой способ - обновить список вызвав эту функцию
					})
			this.editPersonId = null	// Нужно чтобы закрылись поля обновления
		},
		// changeEditPersonId(id, name, age, job) {
		// 	this.editPersonId = id
		// 	// this.$refs.edit.name = name
		// 	// this.$refs.edit.age = age
		// 	// this.$refs.edit.job = job
		// 	// Дотянуться до компонента можно только так:
		// 	//this.$refs.edit_1[0].name = name
		// 	let editName = `edit_${id}`
		// 	let fullName = this.$refs[editName][0];	// Важно, здесь выйти на компонент можно только через квадратные скобки, если для него собиралось имя в отдельной переменной
		// 	fullName.name = name
		// 	fullName.age = age
		// 	fullName.job = job
		// },
		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
					.then(_ => {	// then срабатывает, если обновление в базе прошло успешно
						this.getPeople()	// Чтобы изменения стали тут же видны, самый простой способ - обновить список вызвав эту функцию
					})
		},
		indexLog() {
			console.log('Это компонент Index');
			//alert('Это компонент Index')
		}
	},

	components: {
		EditComponent,
		ShowComponent
	}
}
</script>