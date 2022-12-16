import { forwardRef } from 'react'
import reactLogo from '../assets/react.svg'
import PropTypes from 'prop-types'

const Comment = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="comment">
      <img src={reactLogo} alt="React logo" />
      <div className="comment-content">
        <h2>{props.userName}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
})

Comment.propTypes = {
  userName: PropTypes.string,
  content: PropTypes.string,
}

export default Comment