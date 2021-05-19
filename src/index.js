import Mousetrap from "mousetrap";
import "./globalBind";

const config = ({ namespace = "mousetrap", delimiter = "|", local }) => ({
  watch: { [namespace]: "_sync" + namespace },
  mounted() {
    this["_sync" + namespace]();
  },
  unmount() {
    this[`__${namespace}`].reset();
  },
  methods: {
    ["_sync" + namespace]() {
      this[`__${namespace}`]?.reset();
      const element = local ? this.$el : document.body;
      const mousetrap = (this[`__${namespace}`] = new Mousetrap(element));
      Object.entries(this[namespace]).forEach(([key, options]) => {
        if (key.includes(delimiter)) {
          key = key.split(delimiter).map(s => s.trim());
        }
        if (typeof options === "function") {
          options = { keydown: options };
        }
        const bind = (...args) =>
          global ? mousetrap.bindGlobal(...args) : mousetrap.bind(...args);

        if (options.repeat && !options.keydown) {
          options.keydown = options.repeat;
        }
        const { repeat, keydown, keyup, keypress } = options;

        repeat && bind(key, e => e.repeat && repeat(e));
        keydown && bind(key, e => !e.repeat && keydown(e));
        keyup && bind(key, keyup, "keyup");
        keypress && bind(key, keypress, "keypress");
      });
    }
  }
});

const Mixin = config({});
Mixin.config = config;

export default Mixin;
