import './bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import lang from './lang'
import router from './router'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)
const i18n = createI18n(lang)
const stores = createPinia()

app.use(i18n)
app.use(stores)
app.use(router)

// // Glogals provide/inject composition api
// app.provide('globalStore', {
// 	id: 1,
// 	async getUsers() {
// 		let res = await axios.get('https://jsonplaceholder.typicode.com/users')
// 		console.log('App global store', res.data)
// 	},
// })

// // v-color="'red'"
// app.directive('color', (el, binding) => {
// 	el.style.color = binding.value
// })

// // v-highlight="'yellow'"
// app.directive('highlight', {
// 	mounted(el, binding, vnode) {
// 		el.style.background = binding.value
// 	},
// })

app.mount('#app')
