import { defineStore } from 'pinia'
import data from '../data/products.json'

//import type { Product } from '../types'

import { ref } from 'vue'

// export means that this store can be imported and used in other files

export const useProductStore = defineStore('products', () => {
  // data.products is the array of products from the JSON file where data means the imported JSON file and products is the key in that JSON file that contains the array of products

  // products is a reactive reference to the array of products, which means that any changes to this array will automatically update any components that use this store

  const products = ref(data.products)

  return { products }
})
