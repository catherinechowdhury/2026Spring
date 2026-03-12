<script setup lang="ts">
import { useProductStore } from '@/stores/products'
import SideBar from '@/components/SideBar.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import { useCartStore } from '@/stores/cart'
// useProductStore is a function that returns the products store array which contains the products data and any actions or getters defined in that store

//products refers to the products array in the products store, which is a reactive reference to the array of products from the JSON file. This means that any changes to this array will automatically update any components that use this store.

const products = useProductStore()
const cart = useCartStore()

function addToCart(productId: number) {
  cart.addItems(productId)
}
</script>

<template>
  <h1 class="title is-1">Product List</h1>
  <div class="grid is-col-min-10">
    <div v-for="product in products.products" :key="product.id" class="box">
      <!--:src binds the src attribute of the img element to the product.thumbnail property -->

      <img :src="product.thumbnail" alt="Product Image" class="image is-4by3" />

      <h4 class="title is-6">{{ product.title }}</h4>
      <h6 class="subtitle is-6">Brand: {{ product.brand }} | Category: {{ product.category }}</h6>
      {{ product.description }}

      <button class="button is-primary is-small add-button" @click="addToCart(product.id)">
        Add to Cart
      </button>

      <div>
        <span class="price">${{ product.price }}</span>
      </div>
    </div>
  </div>

  <SideBar :width="300">
    <ShoppingCart />
  </SideBar>
</template>

<style scoped>
.add-button {
  float: right;
  margin-top: 0.5em;
}
.price {
  font-weight: bold;
  color: #3273dc;
}
</style>
