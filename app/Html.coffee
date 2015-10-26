{html, head, meta, link, body, div, script} = require('react').DOM
ReactDocumentMeta = require 'react-document-meta'

module.exports = ({children}) ->
  html null,
    head null,
      meta
        charSet: 'utf-8'

      # Render all meta tags
      ReactDocumentMeta.renderAsReact()

      # Render styles in production
      if process.env.NODE_ENV is 'production'
        link
          rel: 'stylesheet'
          href: '/main.css'

    body null,
      div
        id: 'app'
        dangerouslySetInnerHtml:
          __html: children

      script
        src: '/client.js'

