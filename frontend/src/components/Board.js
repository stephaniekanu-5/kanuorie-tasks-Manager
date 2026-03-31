import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Column from "./Column";
import Header from "./Header";
import API from "../api";
import { initialData } from "../Data/initialData";

export default function Board() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/todos");

      const tasks = {};
      const columns = {
        backlog: { id: "backlog", title: "Backlog", taskIds: [] },
        progress: { id: "progress", title: "In Progress", taskIds: [] },
        done: { id: "done", title: "Done", taskIds: [] },
      };

      res.data.forEach((todo) => {
        const id = String(todo.id);

        tasks[id] = {
          id,
          content: todo.text,
        };

        columns[todo.status || "backlog"].taskIds.push(id);
      });

      setData({
        tasks,
        columns,
        columnOrder: ["backlog", "progress", "done"],
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      try {
        await API.put(`/todos/${draggableId}/move`, {
          status: destination.droppableId,
        });

        fetchTasks();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <Header onSearch={setSearch} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {data.columnOrder.map((colId) => {
            const column = data.columns[colId];

            const tasks = column.taskIds
              .map((id) => data.tasks[id])
              .filter((task) =>
                task.content.toLowerCase().includes(search.toLowerCase())
              );

            return (
              <Column
                key={colId}
                column={column}
                tasks={tasks}
                refresh={fetchTasks}
              />
            );
          })}
        </div>
      </DragDropContext>
    </>
  );
}