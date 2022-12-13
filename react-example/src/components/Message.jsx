import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: '' }
  }

  componentDidMount() {
    this.setState({
        content: 'Hello'
    })
  }

  render() {
    return (
      <div style={{width: 'max-content', border: 'white solid 1px', borderRadius: 4}}>
        {this.props.children(this.state.content)}
      </div>
    )
  }
}

export default Message
