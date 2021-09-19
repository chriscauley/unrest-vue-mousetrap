import bindActionMap from './bindActionMap'

const config = ({ namespace = 'mousetrap', delimiter = ',' }) => ({
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
      this[`__${namespace}`] = bindActionMap(this[namespace], { delimiter })
    },
  },
})

const Mixin = config({})
Mixin.config = config

export default Mixin
