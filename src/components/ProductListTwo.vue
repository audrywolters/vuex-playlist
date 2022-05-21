<template>
  <div id="product-list-two">
      <h2>Product List Two</h2>
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
