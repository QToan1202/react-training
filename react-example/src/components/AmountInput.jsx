import React from 'react'

class AmountInput extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.props.changeAmount(event.target.value)
  }

  render() {
    return (
      <label>
        Enter the class quantity: 
        <input type="text" value={this.props.quantity} onChange={this.handleChange} autoComplete='off' />
      </label>
    )
  }
}

export default AmountInput