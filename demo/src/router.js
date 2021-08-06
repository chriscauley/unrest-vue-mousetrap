import { createRouter, createWebHashHistory } from 'vue-router'

import Basics from './views/Basics'
import Mousetrap from './views/Mousetrap'
import CompositionApi from './views/CompositionApi'
import HelpModal from './views/HelpModal'

const history = createWebHashHistory()
const routes = [
  { path: '/', component: Basics },
  { path: '/composition-api', component: CompositionApi },
  { path: '/mousetrap', component: Mousetrap },
  { path: '/help-modal', component: HelpModal },
]

export default createRouter({ history, routes })
