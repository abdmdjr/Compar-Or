<template>
	<div>
		<div class="flex flex-col w-60 mx-5 overflow-hidden">
			<img
				class="w-40 mx-3 mb-3 self-center object-cover object-center"
				:src="img"
				:alt="title"
			/>
			<div class="">
				<h1 class="title-font text-center text-gray-900 mb-3">
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
			type: Number,
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
</style>
