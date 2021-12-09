
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/global.scss'
import './style/tailwind.css'
import mixin from './mixin'
const app = createApp(App)

app.mixin(mixin)
app.use(router)
app.mount('#app')
