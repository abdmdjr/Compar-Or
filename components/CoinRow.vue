<template>
	<tr>
		<td class="border px-4 py-2">
			<a
				class="text-primary font-normal lg:hover:font-medium"
				:href="url"
				target="_blank"
				rel="noopener noreferrer"
				>{{ site }}</a
			>
		</td>
		<td class="border px-4 py-2">{{ pricemetal }}</td>
		<td class="border px-4 py-2">{{ prime }}</td>
		<td class="border px-4 py-2">{{ price }}</td>
	</tr>
</template>

<script>
export default {
	props: {
		site: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		},
		pricemetal: {
			type: [Number || String],
			default: 0
		},
		prime: {
			type: Number,
			default: 0
		},
		price: {
			type: Number,
			default: 0
		}
	}
}
</script>

<style></style>
