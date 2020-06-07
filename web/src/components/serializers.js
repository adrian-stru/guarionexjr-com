import React from 'react'

const serializers = {
  marks: {
    blink: (props) => <span className='blink'>{props.children}</span>,
    italic: (props) => <span className='italic'>{props.children}</span>,
    link: ({mark, children}) => {
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

export default serializers
