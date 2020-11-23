<template>
	<div
		class="mt-10 rounded shadow-md hover:shadow-lg duration-150 transition-shadow"
	>
		<div class="flex flex-col px-3 py-8 items-center">
			<ul class="flex flex-col items-center">
				<li class="">
					<nuxt-link :to="`/coins/${slug}`">
						<img class="" :src="img" :alt="title" />
					</nuxt-link>
				</li>
				<li class="mt-5 text-center">
					<h1 class="text-important">{{ title }}</h1>
				</li>
				<li class="mb-3 text-xs font-light">
					<h2>{{ gr }}</h2>
				</li>
			</ul>
			<h3 class="text-center text-important text-xl leading-none">
				{{ price }} €
			</h3>
			<div class="mt-3">
				<nuxt-link :to="`/coins/${slug}`"
					><button
						class="btn-price flex items-center align-center py-2 px-3 text-sm text-white rounded"
					>
						Voir les prix
						<i class="material-icons md-18 text-white">navigate_next</i
						><i
							class="material-icons md-18 second-icon text-white"
							style="width:12px;"
							>navigate_next</i
						>
					</button></nuxt-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		img: {
			type: String,
			required: true
		},
		price: {
			type: String,
			required: true
		},
		gr: {
			type: String,
			required: true
		},
		site: {
			type: String,
			required: true
		},
		slug: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
img {
	-webkit-filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	max-width: 140px;
}
.btn-price:hover {
	background: linear-gradient(110deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
}
.btn-price {
	background: linear-gradient(180deg, #f7c298 0%, #f5b592 46.88%, #f2a68b 100%);
	@apply shadow-sm;
}
</style>
