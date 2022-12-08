import React from 'react'
import logProps from '../HOCs/logProps'

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.title}</button>
    )
  }
}

export default logProps(Button)
