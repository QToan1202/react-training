import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <h2>Error occurred</h2>
          <details>{this.state.error && this.state.error.toString()}</details>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
