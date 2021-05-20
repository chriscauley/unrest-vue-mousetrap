<template>
  <div>
    <h1>@ur/vue-mousetrap</h1>
    <h2>Simple hotkeys for vue</h2>
    <div v-if="paused">Game paused, press p to resume</div>
    <div v-else>
      <div>List of current moves</div>
      <ul>
        <li v-for="_move in moves" :key="_move">
          {{ _move }}
        </li>
      </ul>
      <div v-if="undo_stack.length">
        {{ undo_stack.length }} moves to be undone
      </div>
    </div>
  </div>
</template>

<script>
import MousetrapMixin from "@ur/vue-mousetrap";

export default {
  mixins: [MousetrapMixin],
  data() {
    return { paused: false, message: null, moves: [], undo_stack: [] };
  },
  computed: {
    mousetrap() {
      if (this.paused) {
        return { p: this.pause };
      }
      return {
        "up|down|left|right|b|a": this.move,
        p: this.pause,
        "ctrl+z": this.undo,
        "ctrl+y": this.redo
      };
    }
  },
  methods: {
    move(event) {
      this.moves.push(event.key.toLowerCase().replace("arrow", ""));
      this.undo_stack = [];
    },
    pause() {
      this.paused = !this.paused;
    },
    undo() {
      if (this.moves.length) {
        this.undo_stack.push(this.moves.pop());
      }
    },
    redo() {
      if (this.undo_stack.length) {
        this.moves.push(this.undo_stack.pop());
      }
    }
  }
};
</script>
