<template>
  <div>
    <div class="w-56 mx-6 overflow-hidden">
      <img
        class="object-cover object-center"
        :src="coin.img"
        :alt="coin.title"
      />
      <div class="p-6">
        <h2
          class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
        ></h2>
        <h1
          class="title-font text-center text-lg font-medium text-gray-900 mb-3"
        >
          {{ coin.title }}
        </h1>
        <p class="leading-relaxed text-center mb-3">{{ coin.price }} €</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      coin: {
        title: '',
        price: '',
        img: ''
      }
    }
  },
  mounted() {
    axios.get('/api/coins').then((result) => {
      this.coin = result.data
      this.coin.title = this.coin[0].title
      this.coin.price = this.coin[0].price
      this.coin.img = this.coin[0].img
    })
  }
}
</script>

<style></style>
