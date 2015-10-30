React = require 'react'
{div, span} = React.DOM
DocumentMeta = React.createFactory require 'react-document-meta'

meta =
  title: '’sup world!'

module.exports = React.createClass
  displayName: 'App'

  render: ->
    div null,
      DocumentMeta(meta)
      span
        className: 'text'
        'Hello world!'
