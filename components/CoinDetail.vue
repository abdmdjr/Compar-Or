<template>
	<div class="mx-auto mt-10 flex space-x-32">
		<img class="lg:w-72 h-full" :src="img" :alt="title" />
		<div class="flex flex-col space-y-3">
			<h2 class="leading-none text-primary font-medium lg:text-4xl">
				{{ title }}
			</h2>
			<h3 class="text-primary font-medium lg:text-xl">
				Tableau de comparaison
			</h3>
			<table class="table-auto">
				<tbody>
					<tr class="bg-yellow-300">
						<td class="border px-4 py-2">Solutions</td>
						<td class="border px-4 py-2">Prix</td>
						<td class="border px-4 py-2">Livraison</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">
							<a
								class="text-primary font-normal lg:hover:font-medium"
								:href="url"
								target="_blank"
								rel="noopener noreferrer"
								>{{ bestsite }}</a
							>
						</td>
						<td class="border px-4 py-2">{{ bestprice }}</td>
						<td class="border px-4 py-2"></td>
					</tr>
					<tr>
						<td class="border px-4 py-2">{{ secondsite }}</td>
						<td class="border px-4 py-2">{{ secondprice }}</td>
						<td class="border px-4 py-2"></td>
					</tr>
					<tr>
						<td class="border px-4 py-2">{{ thirdsite }}</td>
						<td class="border px-4 py-2">{{ thirdprice }}</td>
						<td class="border px-4 py-2"></td>
					</tr>
					<tr>
						<td class="border px-4 py-2">{{ fourthsite }}</td>
						<td class="border px-4 py-2">{{ fourthprice }}</td>
						<td class="border px-4 py-2"></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		img: {
			type: String,
			default: ''
		},
		bestsite: {
			type: String,
			default: ''
		},
		bestprice: {
			type: [String, Number],
			default: ''
		},
		secondsite: {
			type: String,
			default: ''
		},
		secondprice: {
			type: [String, Number],
			default: ''
		},
		thirdsite: {
			type: String,
			default: ''
		},
		thirdprice: {
			type: [String, Number],
			default: ''
		},
		fourthsite: {
			type: String,
			default: ''
		},
		fourthprice: {
			type: [String, Number],
			default: ''
		},
		gr: {
			type: String,
			default: ''
		},
		url: {
			type: String,
			default: ''
		}
	}
}
</script>

<style>
img {
	-webkit-filter: drop-shadow(3px 3px 3px #222);
	filter: drop-shadow(3px 3px 3px #222);
}
</style>
