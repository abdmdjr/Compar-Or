<template>
	<section
		class="flex flex-col mx-auto mt-6 lg:mt-12 mb-12 text-sm md:text-lg lg:flex-row lg:space-x-10 lg:text-xl"
	>
		<div
			class="flex flex-col h-full md:space-x-12 items-center md:flex-row md:justify-center lg:flex-col lg:space-x-0"
		>
			<client-only placeholder="Chargement des prix...">
				<Carousel
					class="w-310 px-5"
					:mouse-drag="true"
					:per-page="1"
					:center-mode="true"
					:pagination-enabled="true"
					pagination-active-color="#cbd5e0"
					pagination-color="#e2e8f0"
					:pagination-padding="5"
				>
					<Slide><img :src="img3x" :alt="title"/></Slide>
					<Slide><img :src="imgar3x" :alt="title"/></Slide>
				</Carousel>
			</client-only>
			<div class="flex flex-col items-center">
				<h1
					class="mt-4 lg:mt-6 text-xl md:text-2xl text-gray-800 text-center font-normal leading-none"
				>
					{{ title }}
					<span class="mt-2 block text-base lg:text-xl font-light">{{
						gr
					}}</span>
				</h1>
				<h2
					class="my-3 lg:my-5 text-base md:text-xl lg:text-2xl text-gray-800 font-light text-center"
				>
					Meilleur prix : <strong>{{ bestPrice }}€</strong>
				</h2>
				<a
					:href="bestUrl"
					target="_blank"
					rel="noopener noreferrer"
					:aria-label="`link to ${bestSite} - ${title}`"
					class=""
				>
					<button
						class="btnprice py-3 pl-4 pr-5 flex items-center align-center text-white text-sm md:text-lg rounded"
					>
						{{ bestSite
						}}<i class="material-icons md-18 text-white">navigate_next</i
						><i
							class="material-icons md-18 second-icon text-white"
							style="width:8px;"
							>navigate_next</i
						>
					</button>
				</a>
			</div>
		</div>
		<section class="w-full self-center text-justify">
			<h2
				class="mt-8 mb-3 md:mt-10 lg:mb-3 lg:mt-0 text-base md:text-xl font-normal"
			>
				Comparaison des prix
			</h2>
			<p class="mb-4 text-sm md:text-lg font-light">
				Ce tableau indique les prix affichés sur les sites de vente, les frais
				de port, et le prix total pour la pièce "<strong>{{ title }}</strong
				>" en temps réel.
			</p>
			<table
				class="table-auto md:table-fixed w-full border-collapse text-right text-xs md:text-lg text-gray-800"
			>
				<thead class="">
					<th class="md:w-2/6 lg:w-1/3"></th>
					<th class="py-2 px-1 text-xs md:text-lg text-gray-700 font-light">
						Prix
					</th>
					<th class="py-2 px-1 text-xs md:text-lg text-gray-700 font-light">
						Livraison
					</th>
					<th class="py-2 px-1 text-xs md:text-lg text-gray-700 font-light">
						Total
					</th>
				</thead>
				<tbody>
					<tr
						v-for="(column, index) in filteredCoins"
						:key="index"
						:class="{ colorBestSite: index === minPrice }"
					>
						<td
							class="text-left border-b rounded-tl"
							:class="{
								btnpricetable: index === minPrice
							}"
						>
							<a
								:href="column[1][3]"
								target="_blank"
								rel="noopener noreferrer"
								:aria-label="`${column[0]} - ${title}`"
								class="block py-3 px-1 md:px-5"
							>
								<span class="text-xs md:text-base">{{ index + 1 }}.</span>
								{{ column[0].split(' ').join('.') }}
							</a>
						</td>

						<td
							class="px-2 md:px-3 border-b"
							:class="{
								colorBestPrice: index === minPrice
							}"
						>
							{{ column[1][1] }}€
						</td>
						<td
							v-if="column[1][2] === 0"
							class="px-2 md:px-3 border-b"
							:class="{
								colorBestLivraison: index === minPrice
							}"
						>
							Offert
						</td>
						<td
							v-else
							class="px-2 md:px-3 border-b"
							:class="{
								colorBestLivraison: index === minPrice
							}"
						>
							{{ column[1][2] }}€
						</td>
						<td
							class="pr-1 md:px-3 border-b rounded-tr"
							:class="{
								colorBestPriceTotal: index === minPrice
							}"
						>
							{{ column[1][0].toFixed(2) }}€
						</td>
					</tr>
				</tbody>
			</table>
			<h2 class="mt-8 mb-3 md:mt-10 lg:mb-3 text-base md:text-xl font-normal">
				Description
			</h2>
			<p
				v-for="(descr, index) in coinDesc"
				:key="index"
				:class="{ pMarge: index === 1 }"
				class="text-sm md:text-lg font-light"
			>
				{{ descr }}
			</p>
		</section>
	</section>
</template>

<script>
import axios from 'axios'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
	components: {
		Carousel,
		Slide
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		img3x: {
			type: String,
			default: ''
		},
		imgar3x: {
			type: String,
			default: ''
		},
		gr: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			coinDatas: [],
			coinDesc: [],
			bestPrice: '',
			bestSite: '',
			bestUrl: ''
		}
	},
	computed: {
		filteredCoins() {
			return this.coinDatas.map((coin) => {
				return coin
			})
		},
		calculatedPriceTotal() {
			return this.coinDatas.map((coin) => {
				const priceTotal = coin[1][0]
				return priceTotal
			})
		},
		minPrice() {
			return this.calculatedPriceTotal.indexOf(this.bestPrice)
		}
	},
	mounted() {
		axios.get(`/api/coins/${this.$route.params.coin}`).then((result) => {
			this.coinDatas = Object.entries(result.data.prices)
			this.coinDatas.sort((a, b) => {
				return a[1][0] - b[1][0]
			})
			console.log(this.coinDatas)
			this.coinDesc = Object.entries(result.data)[1][1]
			this.bestPrice = Math.min(...this.calculatedPriceTotal)
			this.bestSite = this.filteredCoins[this.minPrice][0].split(' ').join('.')
			this.bestUrl = this.filteredCoins[this.minPrice][1][3]
		})
	},
	head() {
		return {
			title: "Compar'Or - " + this.title
		}
	}
}
</script>

<style scoped>
.VueCarousel-pagination {
	width: 100%;
	text-align: center;
}
.VueCarousel-dot {
	border-radius: 100%;
}
.colorBestPrice,
.colorBestLivraison,
.colorBestPriceTotal {
	background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
	background-attachment: fixed;
	@apply border-b-0 text-white;
}
.btnpricetable {
	background: linear-gradient(110deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
	@apply border-b-0 shadow-sm;
}
.btnpricetable:hover {
	background: linear-gradient(110deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
}
/* .colorBestSite:hover {
	@apply shadow-md transition duration-100 ease-in-out;
} */
.colorBestSite {
	@apply text-white;
}
.btnprice:hover {
	background: linear-gradient(110deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
	@apply shadow-sm;
}
.btnprice {
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
}

img {
	-webkit-filter: drop-shadow(3px 3px 3px rgb(129, 129, 129));
	filter: drop-shadow(1px 2px 3px rgb(129, 129, 129));
}
.pMarge {
	@apply my-2;
}
</style>
