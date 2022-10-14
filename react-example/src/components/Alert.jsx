function Alert(props) {
  console.log(Boolean(props.quantity))
  switch (true) {
    case isNaN(props.quantity):
      return <p>The quantity you just enter no a number</p>

    case (props.quantity >= 60):
      return <p>A class should have a maximum of 60 students</p>
      
    case (props.quantity === 0 || !props.quantity):
      return <p>This class don't have any student yet</p>

    default:
      return <p>The class have {props.quantity} students</p>
  }

}

export default Alert