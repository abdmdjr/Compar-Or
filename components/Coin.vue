<template>
	<div>
		<div class="w-56 mx-6 overflow-hidden">
			<img class="object-cover object-center" :src="img" :alt="title" />
			<div class="p-6">
				<h2
					class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
				></h2>
				<h1
					class="title-font text-center text-lg font-medium text-gray-900 mb-3"
				>
					{{ title }}
				</h1>
				<p class="leading-relaxed text-center mb-3">{{ price }} €</p>
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
		}
	}
}
</script>

<style></style>
