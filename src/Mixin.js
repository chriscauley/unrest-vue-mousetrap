import bindActionMap from './bindActionMap'

const config = ({ namespace = 'mousetrap', delimiter = ',', local }) => ({
  watch: { [namespace]: '_sync' + namespace },
  mounted() {
    this['_sync' + namespace]()
  },
  beforeUnmount() {
    this[`__${namespace}`].reset()
  },
  methods: {
    ['_sync' + namespace]() {
      this[`__${namespace}`]?.reset()
      const element = local ? this.$el : document.body
      this[`__${namespace}`] = bindActionMap(this[namespace], {
        element,
        delimiter,
      })
    },
  },
})

const Mixin = config({})
Mixin.config = config

export default Mixin
