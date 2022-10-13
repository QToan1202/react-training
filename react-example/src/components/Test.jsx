import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {list: []}
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({list: todos}))
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.list !== nextState.list
  }

  componentDidUpdate() {
    console.log('Update data success')
  }

  render() {
    return (
      <p>Component lifecycle</p>
    )
  }
}

export default Test
