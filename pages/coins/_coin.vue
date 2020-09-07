<template>
	<div class="container mx-auto flex">
		<CoinDetail
			:key="coin._id"
			:img="coin.img"
			:title="coin.title"
			:gr="coin.gr"
			:bestsite="coin.bestsite"
			:bestpricemetal="coin.bestpricemetal"
			:bestprime="coin.bestprime"
			:bestprice="coin.bestprice"
			:bestlivraison="coin.bestlivraison"
			:bestpricetotal="coin.bestpricetotal"
			:besturl="coin.besturl"
			:secondsite="coin.secondsite"
			:secondprice="coin.secondprice"
			:secondurl="coin.secondurl"
			:thirdsite="coin.thirdsite"
			:thirdprice="coin.thirdprice"
			:thirdurl="coin.thirdurl"
			:fourthsite="coin.fourthsite"
			:fourthprice="coin.fourthprice"
			:fourthurl="coin.fourthurl"
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

			const bestresult = arraySitePrice[0][1][0] - arraySitePrice[0][1][1]
			coin.bestsite = arraySitePrice[0][0]
			coin.bestpricemetal = bestresult.toFixed(2)
			coin.bestprime = arraySitePrice[0][1][1]
			coin.bestprice = arraySitePrice[0][1][0]
			coin.bestlivraison = arraySitePrice[0][1][2]
			coin.bestpricetotal = arraySitePrice[0][1][0] + arraySitePrice[0][1][2]
			coin.besturl = arraySitePrice[0][1][3]

			coin.secondsite = arraySitePrice[1][0]
			coin.secondprice = arraySitePrice[1][1][0]
			coin.secondurl = arraySitePrice[1][1][1]

			coin.thirdsite = arraySitePrice[2][0]
			coin.thirdprice = arraySitePrice[2][1][0]
			coin.thirdurl = arraySitePrice[2][1][1]

			/* 			coin.fourthsite = arraySitePrice[3][0]
			coin.fourthprice = arraySitePrice[3][1][0]
			coin.fourthurl = arraySitePrice[3][1][1] */
		})
	}
}
</script>

<style></style>
