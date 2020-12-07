<template>
	<tr>
		<td class="text-left border-b border-r py-0">
			<a
				:href="url"
				target="_blank"
				rel="noopener noreferrer"
				:aria-label="`${site} - ${title}`"
				class="block py-5 px-1 md:px-5"
			>
				{{ site }}
			</a>
		</td>

		<td class="px-2 md:px-3 border-b border-r">{{ price }}€</td>
		<td v-if="livraison === 0" class="px-2 md:px-3 border-b border-r">
			Offert
		</td>
		<td v-else class="px-2 md:px-3 border-b border-r">{{ livraison }}€</td>
		<td class="paddmobile pr-3 md:px-3 border-b font-bold">
			{{ pricetotal }}€
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			required: true
		},
		site: {
			type: String,
			required: true
		},
		price: {
			type: String,
			required: true
		},
		livraison: {
			type: Number,
			required: true
		},
		pricetotal: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
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
@media only screen and (max-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
	.paddmobile {
		@apply pr-0;
	}
}
/* .btntable,
.btntable ~ td {
	@apply bg-gray-100;
}

.btnthirdsite,
.btnthirdsite ~ td {
	@apply bg-gray-100;
}

.btnfivesite,
.btnfivesite ~ td {
	@apply bg-gray-100;
}
.btntable {
	transition: all 0.2s ease-in-out 0s;
	background: linear-gradient(90deg, rgba(10, 58, 106, 0.85) 0%, #1d3557 100%);
	font-weight: 600;
	color: white;
	@apply rounded-tl border-b-0;
}
.btnsecondsite {
	transition: all 0.2s ease-in-out 0s;
	background: linear-gradient(90deg, rgba(29, 53, 87, 0.8) 0%, #457b9d 100%);
	color: white;
	@apply border-b-0;
}
.btnthirdsite {
	transition: all 0.2s ease-in-out 0s;
	background: #3a7497b9;
	color: white;
	@apply border-b-0;
}
.btnfourthsite {
	transition: all 0.2s ease-in-out 0s;
	background: #3a73977a;
	color: white;
	@apply border-b-0;
}
.btnfivesite {
	transition: all 0.2s ease-in-out 0s;
	background: #3a739749;
	color: white;
	@apply border-b-0;
}
@screen lg {
	td {
		transition: all 0.2s ease-in-out 0s;
	}
	.btntable:hover ~ .colorBestPriceTotal {
		background: rgba(10, 58, 106, 0.85);
		color: white;
	}
	.btnsecondsite:hover ~ .colorSecondPriceTotal {
		background: rgba(29, 53, 87, 0.8);
		color: white;
	}
	.btnthirdsite:hover ~ .colorThirdPriceTotal {
		background: #3a7497b9;
		color: white;
	}
	.btnfourthsite:hover ~ .colorFourPriceTotal {
		background: #3a73977a;
		color: white;
	}
	.btnfivesite:hover ~ .colorFivePriceTotal {
		background: #3a739749;
		color: white;
	}
} */
</style>
