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
	overflow: scroll;
	overflow-x: hidden;
}
html::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
	width: 0px; /* Remove scrollbar space */
	background: transparent; /* Optional: just make scrollbar invisible */
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

.btn-detail:focus,
.btn-detail-secondary:focus {
	outline: none;
}

.navbar {
	background: linear-gradient(220.01deg, #94d5ff -300%, #1a4269 70%);
}

.navbar-dropdown {
	background: linear-gradient(265.01deg, #94d5ff -317%, #1a4269 61%);
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
.btn-detail {
	background: #ffff;
	font-family: 'Open Sans', sans-serif;
	box-shadow: 0 0 2px #193a5c inset;
	transition: all 0.1s ease-out 0s;
	outline: none;
}
.btn-detail-secondary {
	background: #ffff;
	font-family: 'Open Sans', sans-serif;
	transition: all 0.1s ease-out 0s;
}

input,
textarea {
	outline: none;
}

@screen lg {
	.btn-detail:hover {
		background-image: linear-gradient(160deg, #f6d365 0%, #fda085 160%);
		color: #ffff;
		box-shadow: none;
		outline: none;
		@apply shadow-md;
	}
	.btn-detail-secondary:hover {
		background-image: linear-gradient(160deg, #f6d365 0%, #fda085 160%);
		color: #ffff;
		@apply shadow-sm border-none;
	}
}

.material-icons.md-18 {
	font-size: 18px;
}
.material-icons.md-24 {
	font-size: 24px;
}
.material-icons.md-36 {
	font-size: 28px;
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
