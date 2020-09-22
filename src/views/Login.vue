<template>
	<div>
		<form action="">
			<input type="email" v-model="email" placeholder="email">
			<input type="password" v-model="password" placeholder="pass">
			<button @click="login">Login</button>
		</form>
	</div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
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
									    this.$router.push({name: 'Test'})
									})
						}
        },

    }
</script>

<style scoped>

</style>