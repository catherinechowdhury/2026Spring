# Working with Vue

_Date: February 22, 2026_

## What is Vue

Frontend Architecture: Vue.js is a JS framework for building user interfaces.
- Buttons updated instantly
- Forms react dynamically
- the UI updates automatically

User data ---> directly to UI

## How it works

Vue FrontEnd ---> Express API ---> Database

*Template Interpolation*

Insert the value of the variable: `{{ message }}`

Shorthand for directives examples:
- `@click` = v-on click

## Creating a Script

1. Load Vue via a CDN in its own script container `<script></script>`

    <a style="pointer-events:none"> https://cdn.jsdelivr.net/npm/vue@3.5.28/dist/vue.global.min.js </a>

2. Create a Vue object

    - createApp: `const createApp = Vue.createApp`
    - OR: `Vue.createApp({ })`

3. Create a VUE application instance

    NOTE: For each separate reactive areas, you want two independent reactive sections on the page (or two createApp with its own reactive state, methods, and DOM tracking)
    - instance: `createApp({})`
    - OR: `Vue.createApp({})`



Inside this object, you define: data, methods, computed properties, lifecycle hooks, etx. 

4. The `data()` Function

    This is a function that returns an object, where every property returned becomes a reactive state. It holds memory and represents the current state snapshit
    - Reactive: it tracks when properties are accessed, when properties are changed, auto updates the DOM when needed
    - Structure: `data(){ return{ message: "EXAMPLE"}}`
    - Accessible inside methods via `this` but if you use `data: () =>` then the function does not bind `this`
    - Can have nested properties

5. Methods

    Contains functions you can call from the template. These functions change the state of the object (like void methods). They are behavior, not memory

    - Structure: `methods: { functionName(){ //logic }}`
    - `this` inside a function refers to the Vue app instance
    - methods can also take parameters and call methods from other methods

6. Mounting the App

    Takes the app definition and attaches it to a real DOM element. Before mount(), Vue app is just a configuration object sitting in memory.
    - In the parameters, `mount()` finds the DOM element
    - Structure: `.mount(SELECTOR)`


## Directives

These are special attributes that start with `v-`

1. `v-if`, `v-else`,`v-else-if`

    Conditional Rendering

    - EX: `<p v-if="isLoggedIn">Welcome back!</p>`
    - if `isLoggedIn: true`, the message appears
    - What does it mean that the element is completely removed from DOM?

2. `v-for`

    Used for looping arrays

    - EX: `<li v-for="item in items" :key="item.id">{{ item.name }}</li>`
    - What is :key?
    - Array example: `items: [{ id: 1, name: "Run" },{ id: 2, name: "Lift" }]`

3. `v-model`

    Two-way data binding ( input value <---> reactive state)

    - EX: `<input v-model="username" />`
    - EX: v-model.trim: erases whitespace surrounding the input

4. `v-on`
    - EX: `v-on:submit.prevent`