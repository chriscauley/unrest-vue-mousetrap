<template>
  <div class="app-root">
    <header class="navbar">
      <div class="navbar-brand">@unrest/vue-mousetrap</div>
      <div class="navbar-section flex items-center">
        <div :class="css.tab(tab)" v-for="tab in tabs" :key="tab[0]">
          <router-link :to="tab[0]">{{ tab[1] }}</router-link>
        </div>
        <a href="http://github.com/chriscauley/unrest-vue-mousetrap" class="btn -light">
          <i class="fa fa-github fa-2x" />
        </a>
      </div>
    </header>
    <div class="app-view">
      <router-view />
    </div>
    <div class="text-center mb-16">
      For more information, checkout the
      <a class="link" href="http://github.com/chriscauley/unrest-vue-mousetrap">README</a>
      on github.
      <div>
        I don't know why but there's an input here:
      </div>
      <div>
        <input class="mx-4 border border-gray-600" />
      </div>
    </div>
  </div>
</template>

<script>
const tabs = [
  ['/', 'Mixin'],
  ['/composition-api', 'Composition'],
  ['/mousetrap', 'Mousetrap'],
  // ['/custom', 'Custom'],
]

export default {
  data() {
    return { tabs }
  },
  computed: {
    css() {
      return {
        tab: ([path]) => ['btn', path === this.$route.path ? '-primary' : '-light'],
      }
    },
  },
}
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
