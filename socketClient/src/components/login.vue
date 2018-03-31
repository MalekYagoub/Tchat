<template>
	<v-container>
		<v-layout>
			<v-flex xs12 sm6 offset-sm3>
				<v-card>
					<v-toolbar class="elevation-0">
						<v-toolbar-title>Identifiez vous</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-container>
							<form @submit.prevent="loginUser">
								<v-text-field
								name="nom"
								label="Nom"
								v-model="nom"
								required/>

								<v-text-field
								name="prenom"
								label="Prénom"
								v-model="prenom"
								required/>

								<v-layout row>
									<v-flex xs5>
										<v-subheader class="pl-0">Choisissez une couleur pour vous démarquer</v-subheader>
									</v-flex>
									<v-flex>
										<swatches v-model="color" />
									</v-flex>
								</v-layout>
								<v-btn primary type="submit">Confirmer</v-btn>
							</form>
						</v-container>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	
	import Swatches from 'vue-swatches'
	import "vue-swatches/dist/vue-swatches.min.css"

	export default {
		name: 'Login',
		components: {
			Swatches
		},
		data () {
			return {
				nom: "",
				prenom: "",
				color: null
			}
		},
		methods: {
			loginUser () {
				if (this.nom && this.prenom) {
					if (!this.color) {
						this.color = '#000000'
					}
					const user = {
						'nom': this.nom,
						'prenom': this.prenom,
						'color': this.color
					}
					this.$store.commit('user', user)
					this.$router.push('/messages')
				}
			}
		}
	}
</script>

<style>
	
</style>