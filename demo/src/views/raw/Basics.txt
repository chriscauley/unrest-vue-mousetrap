<script>
import Mousetrap from '@unrest/vue-mousetrap'
import code from 'raw-loader!./raw/Basics.txt'
import copy from 'raw-loader!./copy/Basics.md'

export default {
  mixins: [Mousetrap.Mixin],
  data() {
    return { code, copy, highlighted: [], show_welcome: false }
  },
  computed: {
    mousetrap() {
      if (this.show_welcome) {
        // if this.mousetrap is computed, it will be reactive
        return {
          enter: () => {
            this.show_welcome = false
            this.highlighted = [16, 17, 18, 19]
          },
        }
      }
      return {
        enter: () => {
          this.show_welcome = true
          this.highlighted = [23, 24, 25, 26]
        },

        // multiple keys can be specified with commas
        'a,b': () => (this.highlighted = [29]),

        // behavior can be customized with an object
        '?,/': {
          keydown: () => (this.highlighted = [33]),
          keyup: () => (this.highlighted = [34]),
        },

        // repeat keys fire when held down
        q: {
          repeat: () => (this.highlighted = [39]),
        },

        // global hotkeys will work when focused on input fields
        // There's an input at the bottom of the page to test this
        'ctrl+b,command+b': {
          global: true,
          keydown: () => (this.highlighted = [46]),
        },
      }
    },
  },
}
</script>

<template>
  <p class="text-xl text-center">Press <code>enter</code> to get started.</p>
  <div v-if="show_welcome" class="modal">
    <div class="modal-mask" />
    <div class="modal-content" style="width: 350px">
      <markdown :source="copy" />
    </div>
  </div>
  <highlighter :lines="highlighted" :code="code" label="Basics.vue" />
</template>
