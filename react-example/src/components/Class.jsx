import React from 'react'
import Alert from './Alert'
import AmountInput from './AmountInput'

class Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {quantity: 0}
  }

  handleChange = (value) => {
    this.setState({quantity: value})
  }

  render() {
    const quantity = this.state.quantity

    return (
     <>
        <AmountInput quantity={quantity} changeAmount={this.handleChange} />
        <Alert quantity={quantity} />
     </>
    )
  }
}

export default Class