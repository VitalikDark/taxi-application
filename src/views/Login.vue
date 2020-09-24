<template>
	<v-app>
		<form action="">
			<v-text-field label="Main input" :rules="rules" hide-details="auto"
										type="email" v-model="email" placeholder="email"></v-text-field>
			<v-text-field label="Another input"
										type="password" v-model="password" placeholder="pass"></v-text-field>
			<div class="my-2">
				<v-btn @click="login" color="primary">Login</v-btn>
			</div>
		</form>
	</v-app>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                rules: [
                    value => !!value || 'Required.',
                    value => (value && value.length >= 3) || 'Min 3 characters',
                ],
                email: '',
                password: ''
            }
        },
        methods: {
						login: function() {
								this.$store.dispatch('retriewToken', {
                    email: this.email,
                    password: this.password
								})
									.then(response => {
									    this.$router.push({name: 'Order'})
									})
						}
        },

    }
</script>

<style scoped>

</style>