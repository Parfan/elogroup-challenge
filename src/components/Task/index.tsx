import { Draggable } from "react-beautiful-dnd";
import styles from "./styles.module.css";

interface TaskProps {
  task: {
    id: string,
    content: string,
  },
  index: number
}

function Task(props: TaskProps) {
  const isDragDisabled = props.task.id === "task-1";

  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={
            styles.container +
            (isDragDisabled ? " " + styles.dragDisabled :
              snapshot.isDragging ? " " + styles.draggingTask : "")
          }
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task;