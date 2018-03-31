<template>
	<p class="subheading">
		<span v-bind:style="{ color: message.author.color }">
			{{message.author.prenom}} {{message.author.nom}}
		</span> : {{message.message.text}}
	</p>
</template>

<script>
	export default {
		props: ['message']
	}
</script>

<style>
	
</style>