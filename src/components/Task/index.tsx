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
  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`${styles.container}${snapshot.isDragging ? " " + styles.draggingTask : ""}`}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task;