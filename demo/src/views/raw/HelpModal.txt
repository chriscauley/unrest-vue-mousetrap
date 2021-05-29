<script>
import Mousetrap from "@unrest/vue-mousetrap";
import code from "raw-loader!./raw/HelpModal.txt";

Mousetrap.register({
  open: "mod+o", // string yields no overrides
  showHelp: "?,/", // will only show first key in help menu
  save: {
    name: "Save File", // override name
    keys: "mod+s"
  },
  move: {
    name: "Move player",
    keys: "up,down,left,right,w,a,s,d",
    display: "Arrows/wasd",
    description: "Actions can also have descriptions!"
  },
  cheat: {
    name: "Infinite Lives",
    keys: "up up down down left right left right b a enter",
    display: "I'm not telling!",
    short_display: "???"
  },
  preserveAspectRatio: {
    // this shortcut only exists as documentation (no keys)
    display: "Shift+click",
    description: "Non-keyboard shortcuts can also be added."
  }
});

export default {
  components: { MousetrapModal: Mousetrap.Modal },
  mixins: [Mousetrap.Mixin],
  data() {
    return { code, highlighted: [], show_help: false };
  },
  computed: {
    mousetrap() {
      return {
        open: () => (this.highlighted = [32]),
        save: {
          keydown: e => {
            this.highlighted = [42, 43, 44, 45];
            e.preventDefault(); // override browser's ctrl+s/cmd+s
          },
          global: true // works in input, textarea, etc
        },
        move: () => (this.highlighted = [48]),
        cheat: () => (this.highlighted = [49]),
        showHelp: () => {
          this.show_help = !this.show_help;
          this.highlighted = [50, 51, 52, 53];
        },
        p: () => (this.highlighted = [54]) // not in global registry
      };
    }
  }
};
</script>

<template>
  <p class="text-xl text-center">
    Press "?" to see help menu.
  </p>
  <mousetrap-modal v-if="show_help" @close="show_help = null">
    <div style="max-width: 300px">
      <p>
        <code>Mousetrap.register</code> is useful for generating programatic
        documentation for hotkeys. It's also used to create aliases and group
        hotkeys.
      </p>
      <p>
        <code>Mousetrap.Modal</code> (this component) is included as a quick way
        to display all registered hotkeys to users.
      </p>
    </div>
  </mousetrap-modal>
  <highlighter :lines="highlighted" :code="code" />
</template>
