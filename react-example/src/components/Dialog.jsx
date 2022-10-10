import React from 'react'

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {click: 0}
    this.text = React.createRef()
  }

  handleClick = () => {
    this.setState((prevState) => ({click: prevState.click + 1}))
    console.log(this.text.current.textContent)
  }

  render() {
    return (
      <div style={{maxWidth: 500, border: '1px solid white'}}>
        <h2>Lorem</h2>
        <p ref={this.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam porro dolorum rerum ipsum illum aliquid incidunt dolores, mollitia culpa.</p>
        <button onClick={this.handleClick}>Click Me {this.state.click}</button>
      </div>
    )
  }
}

export default Dialog