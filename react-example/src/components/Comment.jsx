import { forwardRef, useImperativeHandle, useRef } from 'react'
import reactLogo from '../assets/react.svg'
import PropTypes from 'prop-types'
import { useMemo } from 'react'

const Comment = forwardRef(({userName, content}, ref) => {
  const commentRef = useRef(null)
  useImperativeHandle(ref, () => {
    return {
      focusMyComment() {
        commentRef.current.style.border = '1px solid red' 
      },
    }
  }, [])

  const countLetter = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
      count++;
    }
    return count
  }
  const memoFn = useMemo(() => countLetter(content), [content])

  return (
    <div ref={commentRef} className="comment">
      <img src={reactLogo} alt="React logo" />
      <div className="comment-content">
        <h2>{userName}</h2>
        <p>{content}</p>
        <p>{memoFn}</p>
      </div>
    </div>
  )
})

Comment.propTypes = {
  userName: PropTypes.string,
  content: PropTypes.string,
}

export default Comment