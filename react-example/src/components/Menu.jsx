import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.foods = ['chicken', 'beef', 'pork', 'pasta', 'pizza']
  }

  render() {
    return this.foods.map((food) => (
      <li key={food}>{food}</li>
    ))
  }
}

export default Menu
