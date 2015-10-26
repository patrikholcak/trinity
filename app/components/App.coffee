React = require 'react'
{div} = React.DOM
DocumentMeta = React.createFactory require 'react-document-meta'

meta =
  title: '’sup world!'

module.exports = React.createClass
  displayName: 'App'

  render: ->
    div
      className: 'text'
      DocumentMeta(meta)
      'Hello world!'
