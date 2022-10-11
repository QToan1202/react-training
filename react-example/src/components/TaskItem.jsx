import React from 'react';

class TaskItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <p>Task <strong>{this.props.taskName}</strong> deadline in <span style={{color: 'red'}}>{this.props.dueDate}</span></p>
  }
}

export default TaskItem
