import React from 'react'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {login: false}
  }

  changeState = () => {
    this.setState((prevState) => ({login: !prevState.login}))
  }

  render() {
    let greeting = <h1>Hello, {this.props.name}</h1>

    if (this.state.login) {
      greeting = <h1>Welcome back {this.props.name}</h1>
    }
    return (
      <>
        {greeting}
        <button onClick={this.changeState}>Change state</button>
      </>
    )
  }
}

export default Welcome
