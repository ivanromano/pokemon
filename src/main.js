import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import "ant-design-vue/dist/antd.css"
import Antd from "ant-design-vue";

createApp(App)
.use(router)
.use(VueApexCharts)
.use(Antd)
.use(createPinia()).mount('#app')
