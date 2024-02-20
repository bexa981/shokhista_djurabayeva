import './assets/main.css'

import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
app.use(VueSweetalert2);
