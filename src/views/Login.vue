<template>
	<div>
		<form action="">
			<input type="email" v-model="email">
			<input type="password" v-model="password">
			<button @click="login">Login</button>
		</form>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            // ...mapGetters(['activeToken'])
        },
        methods: {
            // login: function () {
            //     axios.post('https://taxiadmin.ddns.mksat.net/taxi/api/v2/disp/login', {
            //         email: this.email,
            //         password: this.password
            //     })
            //         .then((res) => {
            //             console.log('Data ', res)
            //             this.$store.commit('LOGIN_SUCCESS', res)
            //         })
            //         .catch(e => console.log('Пам-Пам ', e))
            // }
						login: function() {
								this.$store.dispatch('retriewToken', {
                    email: this.email,
                    password: this.password
								})
						}
        },

    }
</script>

<style scoped>

</style>