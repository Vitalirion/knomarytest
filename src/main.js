import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElTabs, ElProgress, ElDropdown } from 'element-plus';
import './assets/styles/style.scss'

createApp(App).use(VueAxios, axios).use(ElTabs).use(ElProgress).use(ElDropdown).mount('#app')
