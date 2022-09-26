import Mousetrap from "mousetrap";
import { openBlock, createElementBlock, createElementVNode, renderSlot, Fragment, renderList, toDisplayString, createCommentVNode, createTextVNode, computed, watch, onMounted, onUnmounted } from "vue";
const actionBySlug = {};
const groupBySlug = {};
const unslugify = (s) => s.replace(/[A-Z]/g, (l) => ` ${l.toLowerCase()}`).replace(/-_/g, " ").replace(/^./, (l) => l.toUpperCase());
const isMac = () => {
  const regexp = /Mac|iPod|iPhone|iPad/;
  return typeof window != "undefined" && regexp.test(window.navigator.platform);
};
const normalizeDisplay = (s) => {
  s = s.split(",")[0];
  s = s.replace("mod", isMac() ? "cmd" : "ctrl");
  return s;
};
const shortDisplay = (display) => display.replace(/shift ?\+ ?/gi, "\u21E7").replace(/meta ?\+ ?/gi, "\u2318").replace(/control ?\+ ?/gi, "^");
const register = (...args) => {
  if (args.length === 1) {
    register("", args[0]);
    return;
  }
  const [group_slug, action_map] = args;
  if (!groupBySlug[group_slug]) {
    groupBySlug[group_slug] = {
      slug: group_slug,
      name: unslugify(group_slug),
      actions: []
    };
  }
  const group = groupBySlug[group_slug];
  Object.entries(action_map).forEach(([slug, action]) => {
    if (typeof action === "string") {
      action = { keys: action };
    }
    action.name = action.name || unslugify(slug);
    action.display = action.display || normalizeDisplay(action.keys);
    action.short_display = action.short_display || shortDisplay(action.display);
    actionBySlug[slug] = action;
    group.actions.push(action);
  });
};
Object.assign(register, { actionBySlug, groupBySlug });
const _originalStopCallback = Mousetrap.prototype.stopCallback;
Mousetrap.prototype.stopCallback = function(e, element, combo, sequence) {
  if (this.paused) {
    return true;
  }
  const _global = this._globalCallbacks || {};
  if (_global[combo] || _global[sequence]) {
    return false;
  }
  return _originalStopCallback.call(this, e, element, combo);
};
Mousetrap.prototype.bindGlobal = function(keys, callback, action) {
  this.bind(keys, callback, action);
  this._globalCallbacks = this._globalCallbacks || {};
  if (keys instanceof Array) {
    for (var i = 0; i < keys.length; i++) {
      this._globalCallbacks[keys[i]] = true;
    }
    return;
  }
  this._globalCallbacks[keys] = true;
};
var bindActionMap = (action_map, { delimiter = "," } = {}) => {
  const mousetrap = new Mousetrap();
  action_map = action_map || {};
  Object.entries(action_map).forEach(([key, options]) => {
    if (register.actionBySlug[key]) {
      key = register.actionBySlug[key].keys;
    }
    if (key.includes(delimiter)) {
      key = key.split(delimiter).map((s) => s.trim());
    }
    if (typeof options === "function") {
      options = { keydown: options };
    }
    if (options.repeat && !options.keydown) {
      options.keydown = options.repeat;
    }
    const { repeat, keydown, keyup, keypress, global } = options;
    const bind = (...args) => global ? mousetrap.bindGlobal(...args) : mousetrap.bind(...args);
    if (repeat) {
      bind(key, (e) => e.repeat ? repeat(e) : keydown(e));
    } else if (keydown) {
      bind(key, (e) => !e.repeat && keydown(e));
    }
    keyup && bind(key, keyup, "keyup");
    keypress && bind(key, keypress, "keypress");
  });
  return mousetrap;
};
const config = ({ namespace = "mousetrap", delimiter = "," }) => ({
  watch: { [namespace]: "_sync" + namespace },
  mounted() {
    this["_sync" + namespace]();
  },
  beforeUnmount() {
    this[`__${namespace}`].reset();
  },
  methods: {
    ["_sync" + namespace]() {
      var _a;
      (_a = this[`__${namespace}`]) == null ? void 0 : _a.reset();
      this[`__${namespace}`] = bindActionMap(this[namespace], { delimiter });
    }
  }
});
const Mixin = config({});
Mixin.config = config;
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "UnrestMousetrapModal",
  mixins: [Mixin],
  props: {
    group_slugs: Array
  },
  emits: ["close"],
  computed: {
    groups() {
      const { group_slugs = Object.keys(register.groupBySlug) } = this;
      return group_slugs.map((s) => register.groupBySlug[s]);
    },
    mousetrap() {
      return { "esc,?": () => this.$emit("close") };
    }
  }
};
const _hoisted_1 = { class: "modal" };
const _hoisted_2 = { class: "modal-content" };
const _hoisted_3 = /* @__PURE__ */ createElementVNode("h3", null, "Keyboard Shortcuts", -1);
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "table" };
const _hoisted_6 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "modal-mask",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
    }),
    createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      renderSlot(_ctx.$slots, "default"),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.groups, (group) => {
        return openBlock(), createElementBlock("div", {
          key: group.slug
        }, [
          group.name ? (openBlock(), createElementBlock("h4", _hoisted_4, toDisplayString(group.name), 1)) : createCommentVNode("", true),
          createElementVNode("table", _hoisted_5, [
            createElementVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(group.actions, (action) => {
                return openBlock(), createElementBlock("tr", {
                  key: action.slug
                }, [
                  createElementVNode("td", null, [
                    createTextVNode(toDisplayString(action.name) + " ", 1),
                    action.description ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      title: action.description
                    }, "\u2753", 8, _hoisted_6)) : createCommentVNode("", true)
                  ]),
                  createElementVNode("td", null, toDisplayString(action.display), 1)
                ]);
              }), 128))
            ])
          ])
        ]);
      }), 128))
    ])
  ]);
}
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var use = (action_map, options) => {
  let mouse_trap;
  if (typeof action_map === "function") {
    const computed_action_map = computed(action_map);
    watch(computed_action_map, (value) => {
      mouse_trap.reset();
      mouse_trap = bindActionMap(value, options);
    });
    action_map = computed_action_map.value;
  }
  onMounted(() => {
    mouse_trap = bindActionMap(action_map, options);
  });
  onUnmounted(() => {
    mouse_trap.reset();
  });
};
var index = { Mixin, mixin: Mixin, Modal, register, use };
export { index as default };
