<template>
	<div>
		<div><strong> 1 - Новые заказы</strong></div>
		<ul v-for="item in orders.filter(item => item.type===1)">
			<li>Id - {{item.id}}</li>
			<li>Время - {{item.date_time}}</li>
			<li>Phone - {{item.phone}}</li>
			<li v-for="i in item.routes">
				Routes
				{{i.sector}} -
				{{i.street}}
			</li>
			<li>Price - {{item.price}}</li>
			<li>Comment - {{item.comment}}</li>
		</ul>
		
		
		<div><strong>2 - Заказы в ожидании клиентов</strong></div>
		<ul v-for="item in orders.filter(item => item.type===2)"
			v-if="orders.length">
			<li>id - {{item.id}}</li>
			<li>id - {{item.date_time}}</li>
			<li>Phone - {{item.phone}}</li>
			<li>Price - {{item.price}}</li>
		</ul>
		<p v-else>Empty orders</p>
		
		<div><strong>3 - Выполняемые заказы</strong></div>
		<ul v-for="item in orders.filter(item => item.type===3)">
			<li>id -{{item.id}}</li>
			<li>Type -{{item.type}}</li>
			<li>Phone -{{item.phone}}</li>
			<li>Price -{{item.price}}</li>
		</ul>
	
	
	</div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Test",
        data() {
            return {
                orders: []
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
            axios.post('https://taxiadmin.ddns.mksat.net/taxi/api/v2/disp/orders', {types: [1, 2, 3]}, {
                headers: headers,
            })
                .then((response) => {
                    this.orders = response.data.response
										console.log('ORDERS ', this.orders)
                })
                .catch((error) => {
                    console.log('Пам-Пам ', error)
                })
        }
    }
</script>

<style scoped>
ul {
	list-style: none;
	width: 300px;
	margin: 0 auto;
	border: 2px solid #eee;
	
}
</style>