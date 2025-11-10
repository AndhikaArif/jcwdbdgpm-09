"use client";

import { useState } from "react";

// interface ITask {
//   id: number;
//   title: string;
//   completed: boolean;
//   createdAt: Date;
// }

type TFilterStatus = "All Tasks" | "Done" | "Pending";

// const defaultTasks: ITask[] = [];
const defaultTasks = [
  {
    id: 1,
    title: "Learn Next.js 16",
    completed: false,
    createdAt: new Date("2025-10-20"),
  },
  {
    id: 2,
    title: "Build a to-do app",
    completed: true,
    createdAt: new Date("2025-10-15"),
  },
  {
    id: 3,
    title: "Master TailwindCSS",
    completed: false,
    createdAt: new Date("2025-10-25"),
  },
];

export default function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(defaultTasks);

  const [search, setSearch] = useState("");

  const [filterStatus, setFilterStatus] = useState<TFilterStatus>("All Tasks");
  const filteredTask = tasks.filter((task) => {
    // Search logic
    const regex = new RegExp(search, "i");
    const matchesSearch = regex.test(task.title);

    // Filter status logic
    if (filterStatus === "Pending") {
      return !task.completed && matchesSearch;
    } else if (filterStatus === "Done") {
      return task.completed && matchesSearch;
    } else {
      return matchesSearch;
    }
  });

  function handleAddTask() {
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
      createdAt: new Date(),
    };

    setTasks([newTaskObj, ...tasks]);
    setNewTask(""); // untuk reset newTask state ke bentuk awal ""
  }

  return (
    <main>
      {/* Add Task */}
      <div className="flex gap-2">
        <label htmlFor="add-new-todo">Add New Todo</label>
        <input
          id="add-new-todo"
          type="text"
          placeholder="Doing Something..."
          value={newTask}
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
        />
        <button onClick={() => handleAddTask()}>Add</button>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2">
        <label htmlFor="search-task">Search</label>
        <input
          type="text"
          id="search"
          placeholder="Searching for something..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button>Search Task</button>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        <label htmlFor="filterStatus">Filter Status</label>
        <select
          id="filterStatus"
          value={filterStatus}
          onChange={(event) =>
            setFilterStatus(event.target.value as TFilterStatus)
          }
        >
          <option value={"All Tasks"}>All Tasks</option>
          <option value={"Pending"}>Pending</option>
          <option value={"Done"}>Completed</option>
        </select>
      </div>

      {/* Sort */}
      <div className="flex gap-2">
        <label htmlFor="sortingTasks">Sorting</label>
        <select id="sortingTasks">
          <option>Newest First</option>
          <option>Older First</option>
        </select>
      </div>

      {/* Task List */}
      <ul>
        {filteredTask.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                setTasks((prevTasks) => {
                  return prevTasks.map((prevTask) => {
                    if (task.id === prevTask.id) {
                      return { ...prevTask, completed: !prevTask.completed };
                    } else {
                      return prevTask;
                    }
                  });
                })
              }
            />
            <span>{task.title}</span>;
          </li>
        ))}
      </ul>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */

// [
//   {
//     id: 1,
//     title: "Learn Next.js 16",
//     completed: false,
//     createAt: new Date("2025-10-20"),
//   },
//   {
//     id: 2,
//     title: "Build a to-do app",
//     completed: true,
//     createAt: new Date("2025-10-15"),
//   },
//   {
//     id: 3,
//     title: "Master TailwindCSS",
//     completed: false,
//     createAt: new Date("2025-10-25"),
//   },
// ];
