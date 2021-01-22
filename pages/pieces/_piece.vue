<template>
	<main
		class="container mx-auto mt-16 sm:mt-24 lg:mt-0 px-5 sm:px-16 lg:px-8 pt-8 mb-15 md:mb-20"
	>
		<span class="block md:mb-4 text-xs text-black opacity-75"
			><nuxt-link to="/">Accueil > </nuxt-link>
			<nuxt-link to="/pieces">Pièces > </nuxt-link>{{ coinDetail.title }}</span
		>
		<div
			class="flex flex-col h-full md:mt-10 md:flex-col lg:flex-row lg:space-x-15"
		>
			<CoinDetail
				v-if="coinDetail"
				:title="coinDetail.title"
				:img3x="coinDetail.img3x"
				:imgar3x="coinDetail.imgar3x"
				:gr="coinDetail.gr"
				:price="coinPrice[0][1][0].toFixed(2)"
				:site="coinPrice[0][0].split(' ').join('.')"
				:url="coinPrice[0][1][3]"
			/>
			<div class="flex flex-col">
				<h2
					class="mt-15 mb-3 md:mb-8 text-lg font-normal md:text-1xl lg:text-2xl md:leading-tight lg:mb-5 lg:mt-0"
				>
					Tableau comparatif
				</h2>
				<p class="mb-3 lg:mb-5 text-sm md:text-lg font-light text-justify">
					Ce tableau indique les prix affichés sur les sites de vente, les frais
					de port, et le prix total pour la pièce "<strong>{{
						coinDetail.title
					}}</strong
					>" en temps réel.
				</p>
				<section class="w-full self-start items-start text-justify">
					<table
						class="table-auto md:table-fixed w-full text-right text-sm md:text-lg"
					>
						<thead class="text-gray-800">
							<th class="md:w-2/6 lg:w-1/3"></th>
							<th class="py-3 px-1 md:px-3 text-xs md:text-lg font-normal">
								Prix
							</th>
							<th
								class="padding-mobile py-3 px-0 md:px-3 text-xs md:text-lg font-normal"
							>
								Livraison
							</th>
							<th class="py-3 px-1 md:px-3 text-xs md:text-lg font-bold">
								Total
							</th>
						</thead>
						<tbody>
							<CoinTable
								v-for="(coin, index) in coinPrice"
								:key="index"
								:class="{
									colorBestPrice: index === 0,
									colorSecondPrice: index === 1,
									colorThirdPrice: index === 2,
									colorFourthPrice: index === 3,
									colorFivePrice: index === 4
								}"
								:index="index + 1"
								:title="coinDetail.title"
								:url="coin[1][3]"
								:site="coin[0].split(' ').join('.')"
								:price="coin[1][1].toFixed(2)"
								:livraison="coin[1][2]"
								:pricetotal="coin[1][0].toFixed(2)"
							/>
						</tbody>
					</table>
				</section>
				<div>
					<h2
						class="mt-10 mb-3 md:mb-8 text-lg font-normal md:text-1xl lg:text-2xl md:leading-tight lg:mb-5 lg:mt-15"
					>
						Description
					</h2>
					<p
						v-for="(descr, index) in coinDetail.description"
						:key="index"
						:class="{ pMarge: index === 1 }"
						class="text-sm md:text-lg font-light text-justify"
					>
						{{ descr }}
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CoinDetail from '~/components/CoinDetail'
import CoinTable from '~/components/CoinTable'

export default {
	components: {
		CoinDetail,
		CoinTable
	},
	computed: {
		coinDetail() {
			return this.$store.state.coin.coin
		},
		coinPrice() {
			return this.$store.getters['coin/coinsSortingPricesTable']
		}
	},
	created() {
		this.fetchCoin()
	},
	methods: {
		fetchCoin() {
			this.$store.dispatch('coin/fetchCoin', {
				params: this.$route.params.piece
			})
		}
	},
	head() {
		return {
			title: "Compar'Or - " + this.coinDetail.title
		}
	}
}
</script>

<style lang="scss">
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
	tbody {
		@apply text-xs;
	}
}
/* Ipad Pro */
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
	.container {
		@apply px-8;
	}
}

.colorBestPrice td:nth-child(1) {
	@apply rounded-tl-md;
}
.colorBestPrice {
	background-image: linear-gradient(160deg, #f6d365 -30%, #fda085 160%);
	background-attachment: fixed;
	font-weight: 600;
	transition: all 0.2s ease-in-out 0s;
	@apply text-white border-b-0;
}

.colorBestPrice:hover {
	transition: all 0.2s ease-in-out 0s;
	@apply shadow-xl;
}

.colorSecondPrice a {
	background: rgba(#2f5f8f, 0.7);
	font-weight: 600;
	transition: all 0.2s ease-in-out 0s;
	@apply rounded-tl-none text-white;
}
.colorSecondPrice:hover {
	transition: all 0.2s ease-in-out 0s;
	@apply shadow-xl;
}

.colorThirdPrice a {
	background: rgba(#2f5f8f, 0.8);
	font-weight: 600;
	transition: all 0.2s ease-in-out 0s;
	@apply rounded-tl-none text-white;
}
.colorThirdPrice:hover {
	transition: all 0.2s ease-in-out 0s;
	@apply shadow-lg;
}

.colorFourthPrice a {
	background: rgba(#2f5f8f, 0.9);
	font-weight: 600;
	transition: all 0.2s ease-in-out 0s;
	@apply rounded-tl-none text-white;
}
.colorFourthPrice:hover {
	transition: all 0.2s ease-in-out 0s;
	@apply shadow-md;
}

.colorFivePrice a {
	background-image: linear-gradient(
		112.1deg,
		rgba(32, 38, 57, 1) 11.4%,
		rgba(63, 76, 119, 1) 70.2%
	);
	font-weight: 600;
	transition: all 0.2s ease-in-out 0s;
	@apply rounded-tl-none text-white;
}
.colorFivePrice:hover {
	transition: all 0.2s ease-in-out 0s;
	@apply shadow-sm;
}
.pMarge {
	@apply my-5;
}

/* @screen lg {
	.colorBestPrice a:hover {
		transition: all 0.3s ease-in-out 0s;
		@apply shadow-md;
	}
	.colorSecondPrice a:hover {
		transition: all 0.3s ease-in-out 0s;
		@apply shadow-md;
	}
	.colorThirdPrice a:hover {
		color: white;
		background-color: rgba($base-color, 0.88);
		transition: all 0.1s ease-in-out 0s;
	}
	.colorFourthPrice a:hover {
		color: white;
		background-color: rgba($base-color, 0.83);
		transition: all 0.1s ease-in-out 0s;
	}
	.colorFivePrice a:hover {
		color: white;
		background-color: rgba($base-color, 0.8);
		transition: all 0.1s ease-in-out 0s;
	}
} */
</style>
