<script setup lang="ts">
const props = defineProps<{
  width?: number
}>()
</script>

<template>
  <div class="side-bar" :class="{ 'is-active': false }" :style="{ width: props.width + 'px' }">
    <div class="temp">
      <h2 class="title is-4">Shopping Cart</h2>
      <p>Your cart is currently empty.</p>
    </div>
  </div>
</template>

<style scoped>
.side-bar {
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  border-left: 1px solid #ddd;
  box-shadow: 5px 0 25px rgba(0, 0, 0, 0.2);

  transform: translateX(90%);
  transition: transform 0.3s ease-in-out;
}

.side-bar:hover,
.side-bar.is-active {
  transform: translateX(0);
}
</style>
