<template>
  <div id="app">
    <product-list-one v-bind:productList="productList"></product-list-one>
    <product-list-two v-bind:productList="productList"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'


export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {
      productList: [
        { name: 'Banana Skin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green Shells', price: 60 },
        { name: 'Red Shells', price: 80 },
      ]
    }
  }
}
</script>

<style>
body {
    font-family: Ubuntu;
    color: #555;
}
</style>
