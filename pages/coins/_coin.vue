<template>
	<div class="container mx-auto flex">
		<CoinDetail
			:key="coin._id"
			:img="coin.img"
			:title="coin.title"
			:bestsite="coin.bestsite"
			:bestprice="coin.bestprice"
			:secondsite="coin.secondsite"
			:secondprice="coin.secondprice"
			:thirdsite="coin.thirdsite"
			:thirdprice="coin.thirdprice"
			:fourthsite="coin.fourthsite"
			:fourthprice="coin.fourthprice"
		/>
	</div>
</template>

<script>
import axios from 'axios'
import CoinDetail from '~/components/CoinDetail'

export default {
	components: {
		CoinDetail
	},
	data() {
		return {
			coin: []
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coin = result.data
			const coin = this.coin
			const arraySitePrice = Object.entries(coin.prices)
			arraySitePrice.sort((a, b) => a[1][0] - b[1][0])
			console.log(arraySitePrice)
			arraySitePrice.map((data, i) => {
				if (isNaN(data[1][0])) {
					arraySitePrice.splice(i, 1)
					arraySitePrice.push(data)
				}
			})
			coin.bestsite = arraySitePrice[0][0]
			coin.bestprice = arraySitePrice[0][1][0]
			coin.secondsite = arraySitePrice[1][0]
			coin.secondprice = arraySitePrice[1][1][0]
			coin.thirdsite = arraySitePrice[2][0]
			coin.thirdprice = arraySitePrice[2][1][0]
			coin.fourthsite = arraySitePrice[3][0]
			coin.fourthprice = arraySitePrice[3][1][0]
			/* 			const minValue = min(Object.values(arr), (o) => arr[o])
			coin.bestsite = minValue[0]
			coin.bestprice = minValue[1][0]
			console.log(minValue) */
			/* coin.bestsite = Object.keys(coin.prices).reduce((prev, curr) =>
				coin.prices[prev] < coin.prices[curr] ? prev : curr
			)
			const minValue = min(Object.values(coin.prices), (o) => coin.prices[o])
			console.log(minValue)
			coin.bestprice = minValue[0]
			coin.url = minValue[1] */
		})
	}
}
</script>

<style></style>
