import React from 'react'

const BlinkIcon = () => (
  <span>&#x1f609;</span>
)

const BlinkRender = ({children}) => (
  <span style={{color: 'pink', fontWeight: 800}}>{children}</span>
)

const ItalicIcon = () => (
  <span>&#119894;</span>
)

const ItalicRender = ({children}) => (
  <span style={{fontStyle: 'italic'}}>{children}</span>
)

export default {
  name: 'blinkBlock',
  title: 'Blink Block',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {
            title: 'Blink',
            value: 'blink',
            blockEditor: {
              icon: BlinkIcon,
              render: BlinkRender
            }
          },
          {
            title: 'Italic',
            value: 'italic',
            blockEditor: {
              icon: ItalicIcon,
              render: ItalicRender
            }
          }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    }
  ]
}
