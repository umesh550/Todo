import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toggleTaskCompleted } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";

function TaskItem({ task, onDeleteTask }) {
  const dispatch = useDispatch();
  return (
    <ListItem
      sx={{ bgcolor: "#f1f1f1", borderRadius: 2, boxShadow: 2, mt: 2 }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDeleteTask(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={task.completed} // Checked state based on task completion status
        tabIndex={-1} // Ensure the checkbox is not focusable
        disableRipple // Disable ripple effect
        onChange={() => dispatch(toggleTaskCompleted(task.id))} // Function to toggle task completion
      />
      {/* Display task text with strikethrough if completed */}
      <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        <ListItemText primary={task.text} />
      </div>
    </ListItem>
  );
}

export default TaskItem;
