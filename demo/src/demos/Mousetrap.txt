<script>
import Mousetrap from "@ur/vue-mousetrap";
import code from "raw-loader!./demos/Mousetrap.txt";

export default {
  mixins: [Mousetrap.Mixin],
  data() {
    return { code, highlighted: [], paused: false };
  },
  computed: {
    mousetrap() {
      return {
        // single keys
        4: () => (this.highlighted = [18]),
        x: {
          keyup: () => (this.highlighted = [20])
        },

        // combinations (mod = ctrl or command)
        "mod+shift+k": () => {
          this.highlighted = [24, 25, 26, 27];
          return false;
        },

        "command+k,ctrl+k": () => {
          this.highlighted = [29, 30, 31, 32];
          return false;
        },

        // gmail style sequences
        "g i": () => (this.highlighted = [35]),
        "* a": () => (this.highlighted = [36]),

        // konami code!
        "up up down down left right left right b a enter": () => {
          this.highlighted = [39, 40, 41, 42];
        }
      };
    }
  }
};
</script>

<template>
  <p>
    Below is the examples used in the
    <a href="https://craig.is/killing/mice">Mousetrap documentation</a>. Since
    this package is just a wrapper around mousetrap, please refer to the
    mousetrap docs for more information on how to construct key codes.
  </p>
  <highlighter :lines="highlighted" :code="code" />
</template>
