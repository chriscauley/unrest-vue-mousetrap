<script>
import Mousetrap from '@unrest/vue-mousetrap'
import code from 'raw-loader!./raw/Basics.txt'

export default {
  mixins: [Mousetrap.Mixin],
  data() {
    return { code, highlighted: [], show_welcome: false }
  },
  computed: {
    mousetrap() {
      if (this.show_welcome) {
        // if this.mousetrap is computed, it will be reactive
        return {
          enter: () => {
            this.show_welcome = false
            this.highlighted = [15, 16, 17, 18]
          },
        }
      }
      return {
        enter: () => {
          this.show_welcome = true
          this.highlighted = [22, 23, 24, 25]
        },

        // multiple keys can be specified with commas
        'a,b': () => (this.highlighted = [28]),

        // behavior can be customized with an object
        '?,/': {
          keydown: () => (this.highlighted = [32]),
          keyup: () => (this.highlighted = [33]),
        },

        // repeat keys fire when held down
        q: {
          repeat: () => (this.highlighted = [38]),
        },

        // global hotkeys will work when focused on input fields
        // There's an input at the bottom of the page to test this
        'ctrl+b,command+b': {
          global: true,
          keydown: () => (this.highlighted = [44]),
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
        Press <code>enter</code> again and then scroll down to see more hotkey
        examples.
      </p>
    </div>
  </div>
  <highlighter :lines="highlighted" :code="code" label="Basics.vue" />
</template>
