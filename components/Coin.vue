<template>
	<div class="coin flex flex-col">
		<img
			class="self-center object-cover object-center"
			:src="img"
			:alt="title"
		/>
		<div class="">
			<h1 class="title-font text-center text-gray-900 my-3">
				{{ title }}
			</h1>
			<h6 class="text-center">Sur {{ site }}</h6>
			<p class="leading-relaxed text-center">{{ price }} €</p>
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
			type: Number,
			required: true
		},
		site: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
h1 {
	font-family: 'Dosis', sans-serif;
	font-weight: 600;
}

img {
	max-width: 100px;
}
</style>
