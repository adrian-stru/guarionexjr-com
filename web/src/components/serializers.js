import React from 'react'

const serializers = {
  marks: {
    blink: (props) => <span className='blink'>{props.children}</span>,
    italic: (props) => <span className='italic'>{props.children}</span>
  }
}

export default serializers
