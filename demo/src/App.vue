<template>
  <div>
    <h1>@ur/vue-mousetrap</h1>
    <h2>Simple hotkeys for vue</h2>
    <Highlighter :lines="highlighted" :code="code" />
  </div>
</template>

<script>
import MousetrapMixin from "@ur/vue-mousetrap";
import Highlighter from "./components/Highlighter";
import code from "raw-loader!./lines.txt";

export default {
  components: { Highlighter },
  mixins: [MousetrapMixin],
  data() {
    return { code, highlighted: [], paused: false };
  },
  computed: {
    mousetrap() {
      if (this.paused) {
        // if this.mousetrap is computed, it will be reactive
        return {
          p: () => {
            this.paused = false;
            this.highlighted = [11, 12, 13, 14];
          }
        };
      }
      return {
        p: () => {
          this.paused = true;
          this.highlighted = [18, 19, 20, 21];
        },

        // multiple keys can be specified with commas
        "a,b": () => (this.highlighted = [24]),

        // behavior can be customized with an object, all values are optional
        "?,/,del": {
          keydown: () => (this.highlighted = [28]),
          keyup: () => (this.highlighted = [29])
        },

        // repeat keys fire when held down
        q: {
          repeat: () => (this.highlighted = [34])
        },

        // global hotkeys will work even on input/textarea/select fields
        "ctrl+b,command+b": {
          global: true,
          keydown: () => (this.highlighted = [38, 39, 40, 41])
        }
      };
    }
  }
};
</script>
