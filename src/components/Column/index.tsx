import Lead from "../Lead";
import styles from "./styles.module.css";
import { Droppable } from "react-beautiful-dnd";

interface ColumnProps {
  key: string,
  column: {
    id: string,
    title: string,
    leadIds: string[]
  },
  leads: {
    id: string,
    content: {
      name: string,
      telephone: string,
      email: string,
      oportunities: string[]
    }
  }[],
  isDropDisabled?: boolean
}

function Column(props: ColumnProps) {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>{props.column.title}</h3>
      <Droppable
        droppableId={props.column.id}
        isDropDisabled={props.isDropDisabled}
      // type={props.column.id === "column-3" ? "done" : "active"}
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`${styles.leadList}${snapshot.draggingOverWith ? " " + styles.leadHovering : ""}`}
          >
            {props.leads.map((lead, index) => <Lead key={lead.id} lead={lead} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column;