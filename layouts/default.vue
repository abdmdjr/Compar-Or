<template>
	<div>
		<Navbar />
		<nuxt />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
	components: {
		Navbar
	}
}
</script>

<style>
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

body {
	font-family: 'Roboto', sans-serif;
}

p {
	font-family: 'Roboto', sans-serif;
	@apply text-gray-800;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
	@apply text-gray-700;
}

.text-important {
	font-weight: 500;
	@apply text-gray-900;
}
</style>
