<template>
  <div>
    <h1>@ur/vue-mousetrap</h1>
    <h3>Simple and self-documenting hotkeys for vue</h3>
    <div class="tabs">
      <div :class="css.tab(tab)" v-for="tab in tabs" :key="tab[0]">
        <router-link :to="tab[0]">{{ tab[1] }}</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
const tabs = [
  ["/", "Basics"],
  ["/mousetrap", "Mousetrap"]
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
.tabs {
  display: flex;
  border-bottom: 2px solid #ccc;
  padding: 0 1rem 1rem;
}

.tabs .btn {
  margin-right: 1rem;
}
</style>
