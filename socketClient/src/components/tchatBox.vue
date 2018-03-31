<template>
	<v-container>
		<v-layout>
			<v-flex xs12 sm10 offset-sm1>
				<v-card :height="'700'" class="tchatBox">
					<v-toolbar class="elevation-0">
						<v-toolbar-title>Derniers messages</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<message v-for="message in messages" :key="message.author.nom" :message="message" />
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	
	import { mapGetters } from 'vuex'
	import message from './message'

	export default {
		name: 'TchatBox',
		components: {
			message
		},
		mounted () {
			this.$store.getters.socket.on('serverMessage', (data) => {
				this.$store.commit('messages', data)
			})
		},
		computed: {
      		...mapGetters({
				messages: 'messages'
      		})
    	}
	}
</script>


<style>
	.tchatBox {
		max-height: 700px;
		overflow-y: auto;
	}
</style>