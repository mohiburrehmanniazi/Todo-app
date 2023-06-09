/* eslint-diteisable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png";
import "./todo.css";

export const TodoItem = ({ title, deleteTodo, id}) => {
  
  const [isActive, setIsActive] = useState(false);
  const HandleComplete = () => {
      if (!isActive)
          setIsActive(true)
      else
         return setIsActive(false)

  }

  return (
    <div className="todo-item" id="todo-1">
      <p
        className="todo-task-title"
        style={{ color: isActive ? "lightpink" : "" }}
      >
        {title}
      </p>
      <input
        type="checkbox"
        className="checkbox1"
        id={"check-" + id}
        onClick={HandleComplete}
      />
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  );
};
