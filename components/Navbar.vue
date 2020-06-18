<template>
  <div class="font-sans antialiased bg-yellow-400 shadow">
    <nav
      class="container mx-auto flex items-center justify-between flex-wrap p-4"
    >
      <div class="flex items-center flex-no-shrink text-black">
        <span class="font-semibold text-xl tracking-tight">Compar'Or</span>
      </div>
      <div class="block sm:hidden">
        <button
          class="flex items-center text-teal-lighter hover:text-white hover:border-white"
          @click="toggle"
        >
          <i class="material-icons">menu</i>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm sm:flex-grow sm:text-right sm:space-x-10 sm:mr-8">
          <a
            href="#"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
          >
            Trouvez votre pièce
          </a>
          <a
            href="#"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
          >
            Cours de l'or
          </a>
          <a
            href="#"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
          >
            Blog
          </a>
          <a
            href="#"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style></style>
