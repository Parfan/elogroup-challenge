import { Draggable } from "react-beautiful-dnd";
import styles from "./styles.module.css";

interface LeadProps {
  lead: {
    id: string,
    content: {
      name: string,
      telephone: string,
      email: string,
      oportunities: string[]
    },
  },
  index: number,
  column_id: string,
}

function Lead(props: LeadProps) {
  const isDragDisabled = props.column_id === "column-3";

  return (
    <Draggable
      draggableId={props.lead.id}
      index={props.index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={
            styles.lead +
              (snapshot.isDragging ? " " + styles.draggingLead : "")
            // (isDragDisabled ? " " + styles.dragDisabled :
            //   snapshot.isDragging ? " " + styles.draggingLead : "")
          }
        >
          {props.lead.content.name}
        </div>
      )}
    </Draggable>
  )
}

export default Lead;