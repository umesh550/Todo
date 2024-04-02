import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const TaskInput = ({ handleAddTask, newTask, setNewTask }) => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <TextField
        variant="outlined" // Outlined text field style
        fullWidth // Take full width of the container
        label="Add a new task" // Placeholder text for the input field
        value={newTask} // Value of the input field
        onChange={(e) => {
          setNewTask(e.target.value); // Update the state with the entered value
        }}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()} // Trigger adding task on Enter key press
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        style={{ marginLeft: "10px" }}
      >
        <AddCircleOutlineIcon />
      </Button>
    </div>
  );
};

export default TaskInput;
