<template>
	<v-app>
		<v-card>
			<v-tabs
							v-model="tab"
							background-color="primary"
							dark
			>
				<v-tab>1</v-tab>
				<v-tab>2</v-tab>
				<v-tab>3</v-tab>
			</v-tabs>
			
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<v-card flat>
						<v-card-text>
							<strong>Новые заказы</strong>
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
						</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item>
					<v-card flat>
						<v-card-text>
							<strong>Заказы в ожидании клиентов</strong>
							<ul v-for="item in orders.filter(item => item.type===2)"
									v-if="orders.length">
								<li>id - {{item.id}}</li>
								<li>id - {{item.date_time}}</li>
								<li>Phone - {{item.phone}}</li>
								<li>Price - {{item.price}}</li>
							</ul>
							<p v-else>Empty orders</p>
						</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item>
					<v-card flat>
						<v-card-text>
							<strong>Выполняемые заказы</strong>
							<ul v-for="item in orders.filter(item => item.type===3)">
								<li>id -{{item.id}}</li>
								<li>Type -{{item.type}}</li>
								<li>Phone -{{item.phone}}</li>
								<li>Price -{{item.price}}</li>
							</ul>
						</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
<!--		tabs-->
	
	
	
	</v-app>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Test",
        data() {
            return {
                tab: null, //tabs
                orders: [] //заказы
            }
        },
        computed: mapState([
            'token' //получаем токен (ключ токена)  из Стора
        ]),
        mounted() {
            const headers = {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${this.token}`, //передача токена
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
		margin: 20px auto;
		border: 2px solid #eee;
		
	}
</style>