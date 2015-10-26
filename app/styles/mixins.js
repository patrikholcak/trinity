module.exports = {
  /*
  * Size mixin
  * - usage: @mixin size width[, height = width];
  */
  size: function (wtf, width, height) {
    if (!width) return

    return {
      'width': width,
      'height': height || width
    }
  },

  /*
  * Wrap text with ellipsis at the end of the line
  * - usage: @mixin ellipsis;
  */
  ellipsis: function () {
    return {
      'overflow': 'hidden',
      'white-space': 'nowrap',
      'text-overflow': 'ellipsis'
    }
  },

  /*
  * A shorthand for creating before/after elements
  * - usage: @mixin pseudo [content = '', display = 'block', position = ''];
  */
  pseudo: function (wtf, content, display, position) {
    var styles = {}

    styles['content'] = content || ''

    if (!(position === 'absolute' && display === 'block'))
      styles['display'] = display || 'block'

    if (position)
      styles['position'] = position

    return styles
  },

  /*
  * Makes element GPU-accelerated/Fixes browser painting
  * - usage: @mixin fix-gpu [x = 0, y = 0, z = 0, willChange = ''];
  */
  'fix-gpu': function (wtf, x, y, z, willChange) {
    var styles = {}

    styles['transform'] = 'translate3d(' + (x || 0) + ', ' + (y || 0) + ', ' + (z || 0) + ')'

    if (willChange)
      styles['will-change'] = willChange

    return styles
  }
}
