import './bootstrap';

import { createApp } from 'vue'

import App from './vue/App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import ToastService from 'primevue/toastservice';

createApp(App).use(PrimeVue).use(ToastService).mount("#app")