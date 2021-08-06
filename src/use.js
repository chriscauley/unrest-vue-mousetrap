import bindActionMap from './bindActionMap'
import { onMounted, onUnmounted, computed, watch } from 'vue'

export default (action_map, options) => {
  let mouse_trap
  if (typeof action_map === 'function') {
    const computed_action_map = computed(action_map)
    watch(computed_action_map, (value) => {
      mouse_trap.reset()
      mouse_trap = bindActionMap(value, options)
    })
    action_map = computed_action_map.value
  }
  onMounted(() => {
    mouse_trap = bindActionMap(action_map, options)
  })
  onUnmounted(() => {
    mouse_trap.reset()
  })
}
