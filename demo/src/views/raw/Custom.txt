<script>
import { isEqual } from 'lodash'
import Mousetrap from '@unrest/vue-mousetrap'
import code from 'raw-loader!./raw/Custom.txt'
import { Game } from '@unrest/tetris'

const DEFAULT_KEYS = {
  rotate: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
  drop: 'space',
  swap: 'swap',
}

export default {
  mixins: [Mousetrap.Mixin],
  data() {
    const keys = { ...DEFAULT_KEYS }
    return { code, highlighted: [], show_welcome: false, keys, rows: '' }
  },
  computed: {
    mousetrap() {
      const { rotate, down, left, right, drop, swap } = this.keys
      return {
        [rotate]: () => this.press('rotate'),
        [down]: () => this.press('down'),
        [left]: () => this.press('left'),
        [right]: () => this.press('right'),
        [drop]: {
          keydown: () => this.press('drop'),
          keyup: () => this.press('lock'),
        },
        [swap]: () => this.press('swap'),
      }
    },
    presets() {
      const presets = [
        ['arrows', DEFAULT_KEYS],
        ['wasd', { rotate: 'w', left: 'a', down: 's', right: 'd', swap: 'q', drop: 'space' }],
        ['wars', { rotate: 'w', left: 'a', down: 'r', right: 's', swap: 'q', drop: 'space' }],
        [',aoe', { rotate: ',', left: 'a', down: 'o', right: 'e', swap: "'", drop: 'space' }],
      ]
      const _class = (keys) => ['btn', isEqual(keys, this.keys) ? '-primary' : '-secondary']
      return presets.map(([name, keys]) => ({ name, keys, class: _class(keys) }))
    },
  },
  mounted() {
    this.reset()
  },
  methods: {
    press(action) {
      this.game.input(action), this.render()
      return false // prevents default scrolling for arrow keys
    },
    reset() {
      this.game = new Game({ W: 10, H: 20 })
      this.game.on('gameover', this.reset)
      this.render()
    },
    render() {
      const { board } = this.game
      const rows = []
      board.geo.indexes.forEach((index) => {
        const [x, y] = board.geo.index2xy(index)
        rows[y] = rows[y] || []
        rows[y][x] = board.entities[board.indexes[index]]?.shape || ' '
      })
      this.rows = rows.map((r) => r.join(' ')).join('\n')
    },
    setPreset({ keys }) {
      Object.assign(this.keys, keys)
    },
  },
}
</script>

<template>
  <div>
    <p class="text-xl text-center">
      This example shows how to allow users to remap hotkeys.
    </p>
  </div>
  <div class="view-form">
    <pre>{{ rows }}</pre>
    <div class="right">
      <form>
        <h3>Customize Keys</h3>
        <div class="form-row" v-for="(value, name) in keys" :key="name">
          <label>{{ name }}</label>
          <input v-model="keys[name]" />
        </div>
        <h3>Presets</h3>
        <div class="presets">
          <div v-for="preset in presets" :key="preset.name">
            <button :class="preset.class" @click="setPreset(preset)">{{ preset.name }}</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <highlighter :lines="highlighted" :code="code" label="Basics.vue" />
</template>
