import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//bs5
import '@popperjs/core';
import 'bootstrap';
import './assets/app.scss';

createApp(App).use(store).use(router).mount('#app')