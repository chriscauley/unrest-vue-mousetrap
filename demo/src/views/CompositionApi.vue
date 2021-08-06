<script>
import { reactive } from 'vue'
import Mousetrap from '@unrest/vue-mousetrap'
import code from 'raw-loader!./raw/CompositionApi.txt'

export default {
  setup() {
    const data = reactive({
      show_welcome: false,
      highlighted: [],
      code,
    })
    Mousetrap.use({
      enter: () => {
        data.show_welcome = !data.show_welcome
        data.highlighted = [13, 14, 15, 16]
      },

      // multiple keys can be specified with commas
      'a,b': () => (data.highlighted = [20]),

      // behavior can be customized with an object
      '?,/': {
        keydown: () => (data.highlighted = [24]),
        keyup: () => (data.highlighted = [25]),
      },

      // repeat keys fire when held down
      q: {
        repeat: () => (data.highlighted = [30]),
      },

      // global hotkeys will work even on input fields
      'ctrl+b,command+b': {
        global: true,
        keydown: () => (data.highlighted = [34, 35, 36, 37]),
      },
    })
    return data
  },
}
</script>

<template>
  <p class="text-xl text-center">Press <code>enter</code> to get started.</p>
  <div v-if="show_welcome" class="modal">
    <div class="modal-mask" />
    <div class="modal-content" style="width: 350px">
      <h2>Welcome!</h2>
      <p>
        When you press a hotkey, the lines in the source code are highlighted. The left column tells
        how many times that line has been triggered.
      </p>
      <p>
        While this welcome message is open, all hotkeys other than <code>enter</code> are disabled.
      </p>
      <p>Press <code>enter</code> again and then scroll down to see more hotkey examples.</p>
    </div>
  </div>
  <highlighter :lines="highlighted" :code="code" label="Basics.vue" />
</template>
