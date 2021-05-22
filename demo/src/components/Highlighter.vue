<template>
  <div class="code-wrapper">
    <ssh-pre language="js" :data-line="5">{{ code }}</ssh-pre>
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
    lines: Array
  },
  data() {
    return { counts: {}, fade: false };
  },
  watch: {
    lines() {
      this.fade = false;
      this.lines.forEach(i => (this.counts[i] = (this.counts[i] || 0) + 1));
      setTimeout(() => (this.fade = true), 0);
    }
  },
  methods: {
    css(i) {
      return [
        "line",
        { "bg-blue-300": !this.fade && this.lines.includes(i) },
        { "bg-gray-200": this.fade && this.lines.includes(i) }
      ];
    }
  }
};
</script>

<style lang="scss">
.code-wrapper {
  width: 850px;
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
