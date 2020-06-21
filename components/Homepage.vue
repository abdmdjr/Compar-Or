<template>
  <section
    class="container flex flex-col-reverse sm:flex-row justify-center mx-auto mt-4 sm:mt-24 p-3 h-full"
  >
    <div
      class="text-content mx-auto flex flex-col sm:mt-48 sm:w-310 px-6 sm:p-0 z-10"
    >
      <h1 class="text-2xl sm:text-4xl mt-4 text-gray-800">
        Les plus belles pièces,<br />
        au meilleur prix.
      </h1>
      <p class="text-xs font-light text-justify w-249 my-2">
        Nous comparons les offres pour vous aider dans votre quête d’achat d’or
        : de la prime à la livraison, tout est calculé pour vous faire gagner du
        temps... et de l’argent !
      </p>
      <nuxt-link to="/coin"
        ><button
          class="w-40 mt-2 p-4 rounded-lg text-sm font-medium bg-yellow-400"
        >
          Trouvez votre pièce
        </button>
      </nuxt-link>
    </div>
    <div class="catch-gold mx-auto">
      <img src="~/assets/img/catch-gold.png" class="w-249 z-0" alt="" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  font-family: 'Dosis', sans-serif;
  font-weight: 600;
}
p,
button {
  font-family: 'Exo', sans-serif;
}
</style>
