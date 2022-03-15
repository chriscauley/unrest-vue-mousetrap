<script>
import Mousetrap from '@unrest/vue-mousetrap'
import code from 'raw-loader!./raw/Mousetrap.txt'

export default {
  mixins: [Mousetrap.Mixin],
  data() {
    return { code, highlighted: [], paused: false }
  },
  computed: {
    mousetrap() {
      return {
        // single keys
        4: () => (this.highlighted = [14]),
        x: {
          // key up only
          keyup: () => (this.highlighted = [17]),
        },

        // combinations (mod = ctrl or command)
        'mod+shift+k': () => {
          this.highlighted = [21, 22, 23, 24]
          return false
        },

        'command+k,ctrl+k': () => {
          this.highlighted = [26, 27, 28, 29]
          return false
        },

        // gmail style sequences
        'g i': () => (this.highlighted = [32]),
        '* a': () => (this.highlighted = [33]),

        // konami code!
        'up up down down left right left right b a enter': () => {
          this.highlighted = [36, 37, 38]
        },
      }
    },
  },
}
</script>

<template>
  <p>
    Below is the examples used in the
    <a href="https://craig.is/killing/mice">Mousetrap documentation</a>.
    Since this package is just a wrapper around mousetrap, please refer
    to the mousetrap docs for more information on how to construct key
    codes.
  </p>
  <highlighter :lines="highlighted" :code="code" label="Mousetrap.vue" />
</template>
