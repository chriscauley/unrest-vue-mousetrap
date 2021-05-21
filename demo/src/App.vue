<template>
  <div>
    <h1>@ur/vue-mousetrap</h1>
    <h2>Simple hotkeys for vue</h2>
    <div class="code-wrapper">
      <ssh-pre language="js" :data-line="5">{{ code }}</ssh-pre>
      <div class="lines">
        <div v-for="(_, i) in code.split('\n')" :key="i" :class="css(i)">
          {{ counts[i] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MousetrapMixin from "@ur/vue-mousetrap";
import code from "raw-loader!./lines.txt";

export default {
  mixins: [MousetrapMixin],
  data() {
    return { code, counts: {}, highlighted: [], last: [], paused: false };
  },
  computed: {
    mousetrap() {
      if (this.paused) {
        // if this.mousetrap is computed, it will be reactive
        return {
          p: () => {
            this.paused = false;
            this.highlight([11, 12, 13, 14]);
          }
        };
      }
      return {
        p: () => {
          this.paused = true;
          this.highlight([18, 19, 20, 21]);
        },

        // multiple keys can be specified with pipe
        "up|down|left|right|b|a": () => this.highlight([24]),

        // behavior can be customized with an object, all values are optional
        "?|/|del": {
          keydown: () => this.highlight([28]),
          keyup: () => this.highlight([29])
        },

        // repeat keys fire when held down
        q: {
          repeat: () => this.highlight([34])
        },

        // global hotkeys will work even on input/textarea/select fields
        "ctrl+b|command+b": {
          global: true,
          keydown: () => this.highlight([38, 39, 40, 41])
        }
      };
    }
  },
  methods: {
    highlight(items) {
      this.highlighted = items;
      items.forEach(i => (this.counts[i] = (this.counts[i] || 0) + 1));
      setTimeout(() => {
        this.last = this.highlighted;
        this.highlighted = [];
      }, 0);
    },
    css(i) {
      return [
        "line",
        { "bg-blue-300": this.highlighted.includes(i) },
        { "bg-gray-200": this.last.includes(i) }
      ];
    }
  }
};
</script>

<style lang="scss">
.code-wrapper {
  max-width: 850px;
  position: relative;
  .lines {
    padding: 0.5em;
    position: absolute;
    inset: 0;
    .line {
      height: 1.5em;
      transition: 0.25s;
      &.bg-blue-300 {
        transition: 0s;
      }
    }
  }
  .ssh-pre__content span {
    position: relative;
    z-index: 1;
  }
  .ssh-pre {
    padding-left: 4rem;
  }
}
</style>
