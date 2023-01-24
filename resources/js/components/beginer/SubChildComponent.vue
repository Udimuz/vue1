<template>
		<div>Color: {{ obj.color }}</div>
		<div>Число: {{ obj.number > 10 ? 'Больше чем 10': 'Less 10' }}</div>
		<div>Is published: {{ obj.isPublished ? 'Опубликовано' : 'Не опубликовано' }}</div>
</template>

<script>
export default {
	name: "SubChildComponent",

	props: [
			'obj'
			//'color', 'number', 'isPublished'
	],

	mounted() {
		//this.$parent.$parent.parentLog()
	}
}
</script>

<style scoped>

</style>