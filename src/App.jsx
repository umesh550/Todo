import { useState } from "react";
import { Container, List } from "@mui/material";
import TaskItem from "./components/TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./redux/tasksSlice";
import TaskInput from "./components/TaskInput";

function App() {
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Prevent adding empty or whitespace-only tasks
    if (!newTask.trim()) return;
    // Dispatch addTask action with newTask as payload, to add the task to the store
    dispatch(addTask(newTask));
    // Reset the input field to an empty string after adding the task
    setNewTask("");
  };

  // Function to handle deleting a task
  const handleDeleteTask = (taskId) => {
    // Dispatch deleteTask action with taskId as payload, to remove the task from the store
    dispatch(deleteTask(taskId));
  };
  return (
    <Container maxWidth="sm">
      <h1>To-Do List</h1>
      <TaskInput
        handleAddTask={handleAddTask}
        newTask={newTask}
        setNewTask={setNewTask}
      />
      <List>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDeleteTask={handleDeleteTask} />
        ))}
      </List>
    </Container>
  );
}

export default App;
