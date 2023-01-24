<template>
	<h4>{{ title }}</h4>
	<div style="border:solid 1px #4a5568" class="p-2">
		<!--router-link to="/">Home</router-link-->
		<router-link :to="{ name: 'person.index'}">Сотрудники</router-link> |
		<router-link :to="{ name: 'person.create'}">Добавление</router-link> |
		<hr>
		<router-view/>
	</div>
</template>

<script>
export default {
	name: "Index",
	setup: () => ({
		title: 'Index - компонент'
	})
}
</script>
