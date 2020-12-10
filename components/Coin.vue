<template>
	<div class="mt-10 rounded shadow-md w-full">
		<div class="flex flex-col px-3 py-8 items-center">
			<ul class="flex flex-col items-center">
				<li class="">
					<nuxt-link :to="`/coins/${slug}`">
						<img class="px-3" :src="img" :alt="title" />
					</nuxt-link>
				</li>
				<li class="mt-5 text-center">
					<h1 class="font-semibold">{{ title }}</h1>
				</li>
				<li class="gramme mb-4 text-xs font-light">
					<h2>{{ gr }}</h2>
				</li>
			</ul>
			<h3 class="title font-medium text-center text-xl leading-none">
				{{ price }} €
			</h3>
			<div class="mt-4">
				<nuxt-link :to="`/coins/${slug}`"
					><button
						class="btn-detail flex items-center align-center py-2 px-3 text-sm rounded"
					>
						Voir les prix
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
		slug: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
.gramme {
	font-family: 'Open Sans', sans-serif;
	color: #1d3c5a;
}
img {
	-webkit-filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	filter: drop-shadow(1px 1px 1px rgb(138, 138, 138));
	width: 140px;
}
</style>
