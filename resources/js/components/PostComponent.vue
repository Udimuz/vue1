<template>
	<div class="p-5"><p><b>Сотрудники</b></p>
		<CreateComponent></CreateComponent>
		<IndexComponent ref="index"></IndexComponent>
  </div>
</template>

<script>
//import CreateComponent from "@/components/CreateComponent.vue";
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";
export default {
  name: "PostComponent",

  data() {
    return {
			//persons: null
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
		parentLog() {
			console.log('Это родительский компонент Post');
			//alert('Это компонент Index')
		}

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
		//console.log(this.$refs.index.indexLog());
		//this.$refs.index.indexLog()
		//this.getPersons()
	},

	components: {
		CreateComponent,
		IndexComponent
  },
}
</script>

<style scoped>

</style>