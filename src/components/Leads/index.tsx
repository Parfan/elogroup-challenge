import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../../utils/initialData";
import Column from "../Column";

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
      const newTaskIds = [...start.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };
      setData({ ...data, columns: { ...data.columns, [newColumn.id]: newColumn } });

      return;
    }

    // Moving from one list to another
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, taskIds: finishTaskIds };

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
        <div style={{
          display: "flex"
        }}>
          {data.columnOrder.map((columnId, index) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

            const isDropDisabled = index < homeIndex;

            return <Column
              key={column.id}
              column={column}
              tasks={tasks}
              isDropDisabled={isDropDisabled}
            />;
          })}
        </div>
      </DragDropContext>
  )
}

export default Leads;