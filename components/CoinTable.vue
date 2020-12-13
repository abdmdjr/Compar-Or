<template>
	<tr>
		<td class="text-left py-0">
			<a
				:href="url"
				target="_blank"
				rel="noopener noreferrer"
				:aria-label="`${site} - ${title}`"
				class="padding-site-td block py-4 px-2 md:px-5"
			>
				{{ index }}. {{ site }}
			</a>
		</td>

		<td class="padding-mobile-td px-1 md:px-3 border-b">{{ price }}€</td>
		<td v-if="livraison === 0" class="padding-mobile-td px-2 md:px-3 border-b">
			offerte
		</td>
		<td v-else class="padding-mobile-td px-1 md:px-3 border-b">
			{{ livraison }}€
		</td>
		<td class="padding-mobile-td px-2 md:px-3 border-b">{{ pricetotal }}€</td>
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
		},
		index: {
			type: Number,
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
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {
	.padding-site-td {
		@apply px-1;
	}
	.padding-mobile-td {
		@apply px-1;
	}
}
</style>
