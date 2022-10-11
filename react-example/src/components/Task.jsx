import React from 'react';
import TaskItem from './TaskItem';

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.tasks = [
      {
        id: 1,
        taskName: 'Checking java exercises',
        dueDate: '10/11/2022'
      },
      {
        id: 2,
        taskName: 'Prepare UI',
        dueDate: '10/16/2022'
      },
      {
        id: 3,
        taskName: 'Build bottom nav bar',
        dueDate: '10/12/2022'
      }
    ]
  }

  render() {
    return this.tasks.map((task) => (
      <TaskItem key={task.id} taskName={task.taskName} dueDate={task.dueDate} />
    ))
  }
}

export default Task
