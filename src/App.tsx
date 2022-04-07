import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./components/Column";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import initialData from "./util/initialData";

interface ResultInterface {
  draggableId: string,
  type: string,
  reason: string,
  source: {
    droppableId: string,
    index: number
  },
  destination?: {
    droppableId: string,
    index: number
  } | undefined
}

function App() {
  const [data, setData] = useState(initialData);

  function onDragEnd(result: ResultInterface) {
    const { destination, source, draggableId } = result;

    // If there's nothing to do
    // Do nothing
    if (!destination)
      return

    // Check if the location of the draggable changed
    // If not then do nothing
    if (destination.droppableId === source.droppableId &&
      destination.index === source.index)
      return
    
    // Persisting the changes
    const column = data.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {...column, taskIds: newTaskIds};
    setData({...data, columns: {...data.columns, [newColumn.id]: newColumn}});
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <LoginForm />
      <RegisterForm />
      {data.columnOrder.map(columnId => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;