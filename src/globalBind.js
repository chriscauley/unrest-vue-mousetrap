// Since Mousetrap's plugins aren't npm ready, this just adds the global bind
import Mousetrap from 'mousetrap'

// adapted from https://raw.githubusercontent.com/ccampbell/mousetrap/master/plugins/global-bind/mousetrap-global-bind.js

/**
 * adds a bindGlobal method to Mousetrap that allows you to
 * bind specific keyboard shortcuts that will still work
 * inside a text input field
 *
 * usage:
 * Mousetrap.bindGlobal('ctrl+s', _saveChanges);
 */

const _originalStopCallback = Mousetrap.prototype.stopCallback

Mousetrap.prototype.stopCallback = function (e, element, combo, sequence) {
  if (this.paused) {
    return true
  }

  const _global = this._globalCallbacks || {}
  if (_global[combo] || _global[sequence]) {
    return false
  }

  return _originalStopCallback.call(this, e, element, combo)
}

Mousetrap.prototype.bindGlobal = function (keys, callback, action) {
  this.bind(keys, callback, action)
  this._globalCallbacks = this._globalCallbacks || {}

  if (keys instanceof Array) {
    for (var i = 0; i < keys.length; i++) {
      this._globalCallbacks[keys[i]] = true
    }
    return
  }

  this._globalCallbacks[keys] = true
}
