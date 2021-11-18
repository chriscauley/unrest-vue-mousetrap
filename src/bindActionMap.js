import Mousetrap from 'mousetrap'

import register from './register'
import './globalBind'

export default (action_map, { delimiter = ',' } = {}) => {
  const mousetrap = new Mousetrap()
  action_map = action_map || {}
  Object.entries(action_map).forEach(([key, options]) => {
    if (register.actionBySlug[key]) {
      // action is registered as an alias in global registry (key was a slug)
      key = register.actionBySlug[key].keys
    }
    if (key.includes(delimiter)) {
      key = key.split(delimiter).map((s) => s.trim())
    }
    if (typeof options === 'function') {
      options = { keydown: options }
    }

    if (options.repeat && !options.keydown) {
      options.keydown = options.repeat
    }

    const { repeat, keydown, keyup, keypress, global } = options
    const bind = (...args) => (global ? mousetrap.bindGlobal(...args) : mousetrap.bind(...args))

    if (repeat) {
      bind(key, (e) => (e.repeat ? repeat(e) : keydown(e)))
    } else if (keydown) {
      bind(key, (e) => !e.repeat && keydown(e))
    }
    keyup && bind(key, keyup, 'keyup')
    keypress && bind(key, keypress, 'keypress')
  })
  return mousetrap
}
