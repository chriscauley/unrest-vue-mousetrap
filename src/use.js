import bindActionMap from './bindActionMap'
import { onMounted, onUnmounted } from 'vue'

export default (action_map) => {
  let mouse_trap
  onMounted(() => {
    mouse_trap = bindActionMap(action_map)
  })
  onUnmounted(() => {
    mouse_trap.reset()
  })
}
