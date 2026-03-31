import { Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import API from "../api";

export default function Task({ task, index, refresh }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.content);

  const deleteTask = async () => {
    try {
      await API.delete(`/todos/${task.id}`);
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const saveEdit = async () => {
    try {
      await API.put(`/todos/${task.id}`, {
        text,
      });

      setIsEditing(false);
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          {isEditing ? (
            <>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={saveEdit}>💾</button>
              <button onClick={() => setIsEditing(false)}>❌</button>
            </>
          ) : (
            <>
              <span>{task.content}</span>

              <div className="task-actions">
                <button onClick={() => setIsEditing(true)}>✏️</button>
                <button onClick={deleteTask}>❌</button>
              </div>
            </>
          )}
        </div>
      )}
    </Draggable>
  );
}