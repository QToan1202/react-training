import { forwardRef } from "react";
import { Component } from "react";

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidMount() {
      console.log('My props:', this.props)
    }

    render() {
      const {forwardRef, ...restProps} = this.props

      return <WrappedComponent ref={forwardRef} {...restProps} />
    }
  }

  return forwardRef((props, ref) => {
    return <LogProps forwardRef={ref} {...props} />
  })
}

export default logProps