/* eslint-diteisable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png";
import TickIcon from "../assets/th.jpg";
import "./todo.css";

export const TodoItem = ({ title, deleteTodo, HandleComplete }) => {
  return (
    <div className="todo-item" id="todo-1">
      <span className="todo-task-title" style={item.done?{textDecoration:"line-through"}:null}>{title}</span>
      <input type="checkbox"
      checked={item.done} 
      onChange={()=>HandleComplete()}/>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  );
};
