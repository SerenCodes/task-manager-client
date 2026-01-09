function TaskItem({ task, onDelete }) {
  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => onDelete(task._id)}>❌</button>
    </li>
  );
}

export default TaskItem;