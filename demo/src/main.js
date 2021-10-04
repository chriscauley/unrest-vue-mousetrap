import { createApp } from 'vue'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import '@unrest/tailwind/dist.css'

import App from './App.vue'
import Highlighter from './components/Highlighter'
import router from './router'
import './styles.scss'

const app = createApp(App)
app.component('SshPre', SshPre)
app.component('Highlighter', Highlighter)
app.use(router)
app.mount('#app')
