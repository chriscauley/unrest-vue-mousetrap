<template>
  <div class="code-wrapper">
    <ssh-pre language="js" :label="label">{{ code }}</ssh-pre>
    <div class="lines">
      <div v-for="(_, i) in code.split('\n')" :key="i" :class="css(i)">
        {{ counts[i] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: String,
    lines: Array,
    label: String,
  },
  data() {
    return { counts: {}, fade: false, lines0: [] };
  },
  watch: {
    lines() {
      this.lines0 = this.lines.map(i => i - 1);
      this.fade = false;
      this.lines0.forEach(i => (this.counts[i] = (this.counts[i] || 0) + 1));
      setTimeout(() => (this.fade = true), 0);
    }
  },
  methods: {
    css(i) {
      return [
        "line",
        { "bg-blue-300": !this.fade && this.lines0.includes(i) },
        { "bg-gray-400": this.fade && this.lines0.includes(i) }
      ];
    }
  }
};
</script>

<style lang="scss">
.code-wrapper {
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
