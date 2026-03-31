import { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";
import API from "../api";

export default function Column({ column, tasks, refresh }) {
  const [text, setText] = useState("");

  const addTask = async () => {
    if (!text.trim()) return;

    try {
      await API.post("/todos", {
        text,
        status: column.id, // 🔥 key part
      });

      setText("");
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="column">
    <div className="column-header">{column.title}

      {/* 🔥 ADD TASK INPUT */}
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>    

      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                refresh={refresh}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
    </div>
  );
}