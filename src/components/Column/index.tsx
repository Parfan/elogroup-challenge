import Task from "../Task";
import styles from "./styles.module.css";
import { Droppable } from "react-beautiful-dnd";

interface ColumnProps {
  key: string,
  column: {
    id: string,
    title: string,
    taskIds: string[]
  };
  tasks: {
    id: string,
    content: string
  }[];
}

function Column(props: ColumnProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`${styles.taskList}${snapshot.draggingOverWith ? " " + styles.taskHovering : ""}`}
          >
            {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column;