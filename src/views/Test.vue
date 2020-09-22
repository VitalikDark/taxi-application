<template>
	<div>
	
	</div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Test",
        data() {
            return {
            }
        },
        computed: mapState([
            'token'
        ]),
        mounted() {

            const headers = {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            }
            console.log('Мой токен ', this.token)

            axios.post('https://taxiadmin.ddns.mksat.net/taxi/api/v2/disp/orders', {types:[1,2,3]}, {
                headers: headers
            })
                .then((response) => {
                    console.log(response.data.response)
                })
                .catch((error) => {
                    console.log('Пам-Пам ', error)
                })

        }
    }
</script>

<style scoped>

</style>