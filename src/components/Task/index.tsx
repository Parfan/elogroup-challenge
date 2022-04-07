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
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.container}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  )
}

export default Task;