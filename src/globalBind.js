// Since Mousetrap's plugins aren't npm ready, this just adds the global bind
import Mousetrap from 'mousetrap'

// copied directly from https://raw.githubusercontent.com/ccampbell/mousetrap/master/plugins/global-bind/mousetrap-global-bind.js

/**
 * adds a bindGlobal method to Mousetrap that allows you to
 * bind specific keyboard shortcuts that will still work
 * inside a text input field
 *
 * usage:
 * Mousetrap.bindGlobal('ctrl+s', _saveChanges);
 */
;(function(Mousetrap) {
  if (!Mousetrap) {
    return
  }
  var _globalCallbacks = {}
  var _originalStopCallback = Mousetrap.prototype.stopCallback

  Mousetrap.prototype.stopCallback = function(e, element, combo, sequence) {
    var self = this

    if (self.paused) {
      return true
    }

    if (_globalCallbacks[combo] || _globalCallbacks[sequence]) {
      return false
    }

    return _originalStopCallback.call(self, e, element, combo)
  }

  Mousetrap.prototype.bindGlobal = function(keys, callback, action) {
    var self = this
    self.bind(keys, callback, action)

    if (keys instanceof Array) {
      for (var i = 0; i < keys.length; i++) {
        _globalCallbacks[keys[i]] = true
      }
      return
    }

    _globalCallbacks[keys] = true
  }

  Mousetrap.init()
})(typeof Mousetrap !== 'undefined' ? Mousetrap : undefined)
