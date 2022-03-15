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
    Mousetrap.use(() => {
      if (data.show_welcome) {
        return {
          enter: () => {
            data.show_welcome = false
            data.highlighted = [16, 17, 18, 19]
          },
        }
      }
      return {
        enter: () => {
          data.show_welcome = true
          data.highlighted = [23, 24, 25, 26]
        },

        // multiple keys can be specified with commas
        'a,b': () => (data.highlighted = [29]),

        // behavior can be customized with an object
        '?,/': {
          keydown: () => (data.highlighted = [33]),
          keyup: () => (data.highlighted = [34]),
        },

        // repeat keys fire when held down
        q: {
          repeat: () => (data.highlighted = [39]),
        },

        // global hotkeys will work when focused on input fields
        // There's an input at the bottom of the page to test this
        'ctrl+b,command+b': {
          global: true,
          keydown: () => (data.highlighted = [43, 44, 45, 46]),
        },
      }
    })
    return data
  },
}
</script>

<template>
  <p class="text-xl text-center">Press <code>enter</code> to get started.</p>
  <div v-if="show_welcome" class="modal">
    <div class="modal-mask" />
    <div class="modal-content" style="width: 450px">
      <h2>Welcome!</h2>
      <p>
        When you press a hotkey, the lines in the source code are highlighted.
        The left column tells how many times that line has been triggered.
      </p>
      <p>
        While this welcome message is open, all hotkeys other than
        <code>enter</code> are disabled.
      </p>
      <p>
        Note: In this example the first argument of <code>Mousetrap.use</code>
        is a function. This means the hotkeys are rebound any time
        <code>data.show_welcome</code> changes (since it is a reactive
        property accesed during the function call).
      </p>
      <p>
        Press <code>enter</code> again and then scroll down to see more hotkey
        examples.
      </p>
    </div>
  </div>
  <highlighter :lines="highlighted" :code="code" label="Basics.vue" />
</template>
