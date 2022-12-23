import React, { createRef, forwardRef } from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Toan',
      text: 'My text go over here',
      age: 20
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form >
        <label>
          Use name
        <input ref={this.props.innerRef} name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <select name="age" value={this.state.age} onChange={this.handleChange}>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <br />
        <textarea name="text" value={this.state.text} onChange={this.handleChange} cols={50} rows={10} />
      </form>
    )
  }
}

export default forwardRef((props, ref) => <Form innerRef={ref} {...props}/>)
