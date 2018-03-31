<template>
	<v-container>
		<form @submit.prevent="sendMessage">
			<v-layout row>
				<v-flex xs9 offset-sm1>
					<v-text-field
					name="message"
					label="Message"
					v-model="message"
					required
					/>
				</v-flex>
				<v-flex xs1>
					<v-btn class="mt-3 ml-5" @click="sendMessage">Envoyer</v-btn>
				</v-flex>
			</v-layout>
		</form>
	</v-container>
</template>

<script>
	export default {
		name: 'InputBox',
		data () {
			return {
				message: ''
			}
		},
		methods: {
			sendMessage () {
				if (this.message.length > 0) {
					let messageCreationDate = new Date()
					let formattedDate = messageCreationDate.toLocaleDateString('fr-FR') + ' ' + messageCreationDate.getHours() + ':' + messageCreationDate.getMinutes() + ':' + messageCreationDate.getSeconds()

					const message = {
						'text': this.message,
						'creationDate': formattedDate
					}
					this.$store.dispatch('emitMessage', message)
					this.message = ''
				}
			}
		}
	}
</script>

<style>
	.min-width {

	}
</style>