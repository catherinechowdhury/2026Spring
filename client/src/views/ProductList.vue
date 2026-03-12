<script setup lang="ts">
import { useProductStore } from '@/stores/products'

// useProductStore is a function that returns the products store array which contains the products data and any actions or getters defined in that store

//products refers to the products array in the products store, which is a reactive reference to the array of products from the JSON file. This means that any changes to this array will automatically update any components that use this store.

const products = useProductStore()
</script>

<template>
  <h1 class="title is-1">Product List</h1>
  <div class="grid is-col-min-10">
    <div v-for="product in products.products" :key="product.id" class="box">
      <!--:src binds the src attribute of the img element to the product.thumbnail property -->

      <img :src="product.thumbnail" alt="Product Image" class="image is-4by3" />

      <button class="button is-primary is-small add-button">Add to Cart</button>
      <b>{{ product.title }}</b>
      {{ product.description }}
      <div class="price">{{ product.price }}</div>
    </div>
  </div>
</template>

<style scoped>
.add-button {
  float: right;
  margin-top: 0.5em;
}
</style>
