<template>
  <div class="app-root">
    <header class="navbar">
      <div class="navbar-brand">@unrest/vue-mousetrap</div>
      <div class="navbar-section flex items-center">
        <div :class="css.tab(tab)" v-for="tab in tabs" :key="tab[0]">
          <router-link :to="tab[0]">{{ tab[1] }}</router-link>
        </div>
      </div>
    </header>
    <div class="app-view">
      <router-view />
    </div>
  </div>
</template>

<script>
const tabs = [
  ["/", "Basics"],
  ["/mousetrap", "Mousetrap"],
  // ["/help-modal", "Help Modal"]
];

export default {
  data() {
    return { tabs };
  },
  computed: {
    css() {
      return {
        tab: ([path]) => [
          "btn",
          path === this.$route.path ? "-primary" : "-light"
        ]
      };
    }
  }
};
</script>

<style>
body {
  background: #eee;
}
.app-root {
  background: white;
  margin: auto;
  width: 900px;
}
.app-view {
  padding: 2rem;
}

.tabs .btn {
  margin-right: 1rem;
}
</style>
