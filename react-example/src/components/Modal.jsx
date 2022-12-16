import React from 'react'
import * as ReactDOM from 'react-dom'
const rootEl = document.getElementById('root')

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.element = document.createElement('div')
  }

  componentDidMount() {
    rootEl.appendChild(this.element)
  }

  componentWillUnmount() {
    rootEl.removeChild(this.element)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.element)
  }
}

export default Modal