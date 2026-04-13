import { defineStore } from 'pinia'
import type { Product } from '../../../server/types'
import { ref } from 'vue'
import { api } from '../services/myFetch'

export const useProductsStore = defineStore('products', () => {
  // Example of using the api function to fetch data from the server
  api('users').then((data) => {
    console.log(data)
  })

  const products = ref<Product[]>([])

  return { products }
})
