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
}

h1 {
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
}
</style>
