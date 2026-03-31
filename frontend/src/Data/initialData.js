export const initialData = {
  tasks: {},
  columns: {
    backlog: { id: "backlog", title: "Backlog", taskIds: [] },
    progress: { id: "progress", title: "In Progress", taskIds: [] },
    done: { id: "done", title: "Done", taskIds: [] },
  },
  columnOrder: ["backlog", "progress", "done"],
};