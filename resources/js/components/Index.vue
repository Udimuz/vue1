<template>
	<h4>{{ title }}</h4>
	<div style="border:solid 1px #4a5568">
		<router-link to="/">Home</router-link> |
		<router-link to="/tags">Теги</router-link> |
		<router-link to="/posts">Сообщения</router-link>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	//name: "Index",
	setup: () => ({
		title: 'Index - компонент'
	})
}
</script>
