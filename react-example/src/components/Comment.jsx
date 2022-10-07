import reactLogo from '../assets/react.svg'

function Comment(props) {
  return (
    <div className="comment">
      <img src={reactLogo} alt="React logo" />
      <div className="comment-content">
        <h2>{props.userName}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Comment