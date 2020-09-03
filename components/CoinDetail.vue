<template>
	<div class="container flex">
		<img
			class="self-center object-cover object-center"
			:src="img"
			:alt="title"
		/>
		<div class="flex flex-col">
			<h2 class="text-primary font-medium lg:text-4xl">{{ title }}</h2>
			<table class="table-auto">
				<tbody>
					<tr>
						<td class="border px-4 py-2">Site</td>
						<td class="border px-4 py-2">Prix</td>
						<td class="border px-4 py-2">Livraison</td>
					</tr>
					<tr>
						<td class="border px-4 py-2">{{ bestsite }}</td>
						<td class="border px-4 py-2">{{ bestprice }}</td>
						<td class="border px-4 py-2"></td>
					</tr>
					<tr class="bg-gray-100">
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
			required: true
		},
		img: {
			type: String,
			required: true
		},
		bestsite: {
			type: String,
			required: true
		},
		bestprice: {
			type: Number,
			required: true
		},
		secondsite: {
			type: String,
			required: true
		},
		secondprice: {
			type: Number || String,
			required: true
		},
		thirdsite: {
			type: String,
			required: true
		},
		thirdprice: {
			type: String,
			required: true
		},
		fourthsite: {
			type: String,
			required: true
		},
		fourthprice: {
			type: String,
			required: true
		},
		gr: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		}
	}
}
</script>

<style></style>
