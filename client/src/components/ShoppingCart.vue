<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>

<template>
  <h4 class="title is-4">Shopping Cart</h4>
  <p v-if="cart.items.length === 0">Your cart is currently empty.</p>
  <ul v-else>
    <li v-for="item in cart.items" :key="item.product.id" class="cart-item">
      <img
        :src="item.product.thumbnail"
        alt="Product Image"
        class="image is-32x32"
        style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px"
      />
      {{ item.product.title }}
      <select v-model="item.quantity">
        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
      </select>
      = ${{ (item.product.price * item.quantity).toFixed(2) }}
    </li>
  </ul>
  <p v-if="cart.items.length > 0" class="total">Total: ${{ cart.totalPrice.toFixed(2) }}</p>
</template>

<style scoped>
.cart {
  padding: 5rem;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
