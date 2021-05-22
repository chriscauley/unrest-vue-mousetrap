# @unrest/vue-mousetrap

This provides an easy way to add keyboard shortcuts to any vue component. Why not start with the [interactive demo with code examples](https://chriscauley.github.io/unrest-vue-mousetrap)? This package is a wrapper around (mousetrap)[https://craig.is/killing/mice] so additional information (key aliases, etc) can be found there.

## Basic Usage

Use the default import from this package and add a mousetrap computed property to a component to enable shortcuts. `component.mousetrap` should return an object with a shortcut string as the key and an action or action object as the value.

``` javascript
<script>
import MousetrapMixin from '@unrest/vue-mousetrap'

export default {
  mixins: [MousetrapMixin],
  computed: {
    mousetrap() {
      if (this.paused) { // 1
        return {
          esc: this.unpause
        }
      }
      return {
        esc: this.pause,
        'space,x,enter': this.useItem, // 2
        'up,down,left,right': (event) => this.move(event.key), // 3
        '?': { // 4
          keydown: this.showHelp,
          keyup: this.hideHelp,
        },
        'up up down down left right left right b a,mod+shift+q': this.toggleCheat // 5
      }
    }
  },
  methods: {
    ... // pause, unpause, move, showHelp, hideHelp, and toggleCheat go here
  }
}
```

Notes:

1. Because this is a computed property, hotkeys will be reloaded any time `this.paused` is changed. Other hotkeys (arrows and help menu) will not be available while paused.

2. Multiple hotkeys can be specified if separated by a comma `,`. This delimiter can be set using mixin config options below.

3. The first argument passed into an action is the native keyboard event. Also, arrow functions are the best.

4. The action can either be a function or a an object with keys `{ keydown, keyup, repeat, global }`. See full details below.

5. Any valid mousetrap sequence will work for the keys. In this case the konami code or pressing ctrl+shift+q (command+shift+q on a mac) will `toggleCheat`.

## Mixin Config options

If you want to use a different delimiter or namespace for the mousetrap, the mixin is configurable:

``` javascript
  mixins: [MousetrapMixin.config({ delimeter: '&&&', namespace: 'myHotkeys' })],
  computed: {
    myHotkeys: {
      '| &&& enter': this.doSomething
    }
  }
```

## Action options

If the action is specified as a function, the hotkey will default to executing that function on keydown. So `esc: () => this.paused = false` and `esc: { keydown: () => this.paused = false }` are equivalent. Full behavior can be customized by passing in an object instead. Available options are

* `keydown: Function(event)`

* `keyup: Function(event)`

* `keypress: Function(event)`

* `repeat: Function(event)` - Will be fired when `event.repeat === true` (ie user is holding down a key). If `keydown === undefined`, keydown will default to repeat.

* `global: Boolean` - By default mousetrap will ignore hotkeys on input, textarea, and select elements. Setting global to true will capture these events (ie you want ctrl+s be captured even when a text area is focused).

``` javascript
  mousetrap: {
    a: {
      keydown: this.doSomething,
      keypress: this.doSomethingElse, // TBH I don't know what keypress is used for
      repeat: this.doSomethingALot,
      keyup: this.stopSomething,
      global: true, // all the above work anywhere, including inputs
    },
    'up,down,left,right': {
      repeat: this.move, // holding down arrows spams repeat, keydown is this.move
    },
    'ctrl+s': {
       keydown: this.save,
       global: true, // save even in textarea
    },
    '?': {
      keydown: this.showHelp,
      keyup: this.hideHelp,
    },
  }
```