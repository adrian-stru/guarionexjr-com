import React from 'react'

const BlinkIcon = () => (
  <span>&#x1f609;</span>
)

const BlinkRender = ({children}) => (
  <span style={{color: 'pink', fontWeight: 800}}>{children}</span>
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
          }
        ]
      }
    }
  ]
}
