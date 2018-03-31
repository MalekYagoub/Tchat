<template>
	<div>
		<tchatBox/>
		<inputBox/>
	</div>
</template>

<script>
	import tchatBox from './tchatBox'
	import inputBox from './inputBox'

	export default {
		name: 'Tchat',
		components: {
			tchatBox,
			inputBox
		}
	}
</script>

<style>
	
</style>