import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/styles/style.scss'

createApp(App).use(VueAxios, axios).mount('#app')


