import { createRouter, createWebHashHistory } from 'vue-router'

import Basics from './views/Basics'
import Mousetrap from './views/Mousetrap'
import HelpModal from './views/HelpModal'

const history = createWebHashHistory()
const routes = [
  { path: '/', component: Basics },
  { path: '/mousetrap', component: Mousetrap },
  { path: '/help-modal', component: HelpModal },
]

export default createRouter({ history, routes })
