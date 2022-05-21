<template>
  <div id="product-list-one">
      <h2>Product List One</h2>
      <ul>
          <li v-for="product in productList">
            <span class="name">{{ product.name }}</span>
            <span class="price">${{ product.price }}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['productList'],
    data () {
        return {
    
        }
    }
}
</script>

<style>

</style>
