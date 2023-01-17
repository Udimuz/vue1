<template>
	<div class="text-center p-5">Строим таблицу
		<CreateComponent></CreateComponent>
<!--		<table class="table">-->
<!--			<thead>-->
<!--			<tr>-->
<!--				<th>#</th>-->
<!--				<th>Имя</th>-->
<!--				<th>Возраст</th>-->
<!--				<th>Должность</th>-->
<!--			</tr>-->
<!--			</thead>-->
<!--			<tbody>-->
<!--			<tr v-for="person in persons">-->
<!--				<th scope="row">{{ person.id }}</th>-->
<!--				<td>{{ person.name }}</td>-->
<!--				<td>{{ person.age }}</td>-->
<!--				<td>{{ person.job }}</td>-->
<!--			</tr>-->
<!--			</tbody>-->
<!--		</table>-->
  </div>
</template>

<script>
//import SinglePostComponent from "@/components/SinglePostComponent.vue";
import SinglePostComponent from "./SinglePostComponent.vue";
//import CreateComponent from "@/components/CreateComponent.vue";
import CreateComponent from "./CreateComponent.vue";
export default {
  name: "PostComponent",

  data() {
    return {
			persons: null
      // persons: [
      //   {
      //     id: 1,
      //     name: 'Vasya',
      //     age: 20,
      //     job: 'coach',
      //   },
      //   {
      //     id: 2,
      //     name: 'Elena',
      //     age: 17,
      //     job: 'rest',
      //   },
      //   {
      //     id: 3,
      //     name: 'Petr',
      //     age: 34,
      //     job: 'seller',
      //   },
			// 	{
			// 		id: 4,
			// 		name: 'Ksusha',
			// 		age: 25,
			// 		job: 'traveler',
			// 	},
			// 	{
			// 		id: 5,
			// 		name: 'Olya',
			// 		age: 21,
			// 		job: 'teacher',
			// 	},
      // ],

      // name: 'Клоун',
      // age: 47,
      // arr: [false, 77, '108'],
      // someObj: {
      //   personName: 'Damayita'
      // }
    }
  },

	computed: {
		// personsAgeCheck() {
		// 	return this.persons.filter(function(person){
		// 		return person.age > 20
		// 		// Можно было сделать так:
		// 		// if (person.age > 20) {
		// 		// 	return person
		// 		// }
		// 	})
		// }
	},

  methods: {
		// getPosts() {
		// 	axios.get('/posts')	// В "data" у нас то что пришло с бекенда
		// 			.then(function(myres) {	// Дальше работаем с данными, которые придут с бекенда, а точнее - из контроллера PersonController
		// 				console.log(myres.data);
		// 			})
		// },

		// getPersons() {
		// 	axios.get('/persons')
		// 			.then(myres => {	// Внутри скобок у нас уже будет идти работа
		// 				this.persons = myres.data;
		// 			})
		// 			.catch(error => {})
		// 			.finally( { } )	// В любом случае отработает
		// }
  },

	mounted() {
		//this.getPersons()
	},

	components: {
		CreateComponent
  },
}
</script>

<style scoped>

</style>