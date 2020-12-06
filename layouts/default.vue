<template>
	<div class="flex flex-col h-screen relative justify-between">
		<Navbar />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
	components: {
		Navbar,
		Footer
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
	@apply antialiased;
}

body {
	font-family: 'Open Sans', sans-serif;
	color: #193a5c;
}

p {
	font-family: 'Open Sans', sans-serif;
	color: #1d3c5a;
}

.navbar {
	background: linear-gradient(220.01deg, #94d5ff -300%, #1a4269 70%);
}

.title-first {
	font-family: 'Ubuntu', sans-serif;
	font-weight: 400;
}
.title-second {
	font-family: 'Overlock SC', cursive;
	background: -webkit-linear-gradient(220.01deg, #ffcc2f 0%, #ef9834 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.title {
	font-family: 'Ubuntu', sans-serif;
	color: #193a5c;
}
@screen lg {
	.btn:hover {
		background: #215385;
		color: white;
	}
}

.btn {
	background: white;
	font-weight: 600;
	color: #2f5f8f;
	border: 0.6px solid;
	border-color: #2f5f8f;
	transition: all 0.1s ease-in-out 0s;
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
	margin-left: -0.75rem;
}

.page-enter-active,
.page-leave-active {
	transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
