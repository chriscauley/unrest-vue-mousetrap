<script>
import { reactive } from 'vue'
import Mousetrap from '@unrest/vue-mousetrap'
import code from 'raw-loader!./raw/CompositionApi.txt'
import copy from 'raw-loader!./copy/CompositionApi.md'

export default {
  setup() {
    const data = reactive({
      show_welcome: false,
      highlighted: [],
      code,
      copy,
    })
    Mousetrap.use(() => {
      if (data.show_welcome) {
        return {
          enter: () => {
            data.show_welcome = false
            data.highlighted = [18, 19, 20, 21]
          },
        }
      }
      return {
        enter: () => {
          data.show_welcome = true
          data.highlighted = [25, 26, 27, 28]
        },

        // multiple keys can be specified with commas
        'a,b': () => (data.highlighted = [31]),

        // behavior can be customized with an object
        '?,/': {
          keydown: () => (data.highlighted = [35]),
          keyup: () => (data.highlighted = [36]),
        },

        // repeat keys fire when held down
        q: {
          repeat: () => (data.highlighted = [41]),
        },

        // global hotkeys will work when focused on input fields
        // There's an input at the bottom of the page to test this
        'ctrl+b,command+b': {
          global: true,
          keydown: () => (data.highlighted = [48]),
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
      <markdown :source="copy" />
    </div>
  </div>
  <highlighter :lines="highlighted" :code="code" label="Basics.vue" />
</template>
