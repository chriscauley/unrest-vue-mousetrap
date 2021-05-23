<template>
  <div class="modal">
    <div class="modal-mask" @click="$emit('close')" />
    <div class="modal-content">
      <h3>Keyboard Shortcuts</h3>
      <slot />
      <div v-for="group in groups" :key="group.slug">
        <h4 v-if="group.name">{{ group.name }}</h4>
        <table class="table">
          <tbody>
            <tr v-for="action in group.actions" :key="action.slug">
              <td>
                {{ action.name }}
                <span v-if="action.description" :title="action.description"
                  >❓</span
                >
              </td>
              <td>{{ action.display }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import register from "./register";
import Mixin from "./Mixin";

export default {
  mixins: [Mixin],
  props: {
    group_slugs: Array
  },
  emits: ["close"],
  computed: {
    groups() {
      const { group_slugs = Object.keys(register.groupBySlug) } = this;
      return group_slugs.map(s => register.groupBySlug[s]);
    },
    mousetrap() {
      return { "esc,?": () => this.$emit("close") };
    }
  }
};
</script>
