import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../../utils/initialData";
import Column from "../Column";
import styles from "./styles.module.css";

interface startInterface {
  type: string,
  source: {
    droppableId: string,
    index: number
  },
  mode: string,
  draggableId: string
}

interface ResultInterface extends startInterface {
  reason: string,
  destination?: {
    droppableId: string,
    index: number
  } | undefined
}

function Leads() {
  const [data, setData] = useState(initialData);
  const [homeIndex, setHomeIndex] = useState(0);

  function onDragStart(start: startInterface) {
    setHomeIndex(data.columnOrder.indexOf(start.source.droppableId));
  }

  function onDragEnd(result: ResultInterface) {
    setHomeIndex(0);

    const { destination, source, draggableId } = result;

    // If there's nothing to do
    // Do nothing
    if (!destination)
      return;

    // Check if the location of the draggable changed
    // If not then do nothing
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index)
      return;

    // Persisting the changes
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    // Moving in the same list
    if (start === finish) {
      const newLeadIds = [...start.leadIds];
      newLeadIds.splice(source.index, 1);
      newLeadIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, leadIds: newLeadIds };
      setData({ ...data, columns: { ...data.columns, [newColumn.id]: newColumn } });

      return;
    }

    // Moving from one list to another
    const startLeadIds = [...start.leadIds];
    startLeadIds.splice(source.index, 1);
    const newStart = { ...start, leadIds: startLeadIds };

    const finishLeadIds = [...finish.leadIds];
    finishLeadIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, leadIds: finishLeadIds };

    setData({
      ...data, columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    });
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className={styles.container}>
        {data.columnOrder.map((columnId, index) => {
          const column = data.columns[columnId];
          const leads = column.leadIds.map(leadId => data.leads[leadId]);

          const isDropDisabled = index < homeIndex;

          return <Column
            key={column.id}
            column={column}
            leads={leads}
            isDropDisabled={isDropDisabled}
          />;
        })}
      </div>
    </DragDropContext>
  )
}

export default Leads;