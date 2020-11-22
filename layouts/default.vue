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

html {
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
}
html::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
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

.material-icons.md-18 {
	font-size: 18px;
}
.material-icons.md-24 {
	font-size: 24px;
}
.material-icons.md-36 {
	font-size: 36px;
}
.material-icons.md-48 {
	font-size: 48px;
}
.second-icon {
	margin-left: -0.85rem;
}
</style>
