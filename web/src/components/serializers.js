import React from 'react'

const serializers = {
  marks: {
    blink: (props) => <span className='punc'>{props.children}</span>
  }
}

export default serializers
