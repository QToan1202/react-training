import React from 'react'
import { UserContext } from '../contexts/user'

class Text extends React.Component {
  render() {
    return (
      <p>{this.context}</p>
    )
  }
}

Text.contextType = UserContext

export default Text