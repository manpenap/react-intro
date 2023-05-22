import './styles/TodoItem.css';
import check from './styles/icons/check.png';
import deleteIcon from './styles/icons/deleteIcon.png';

function TodoItem(props) {
    return (
      <li>
        <span 
          className ={`check-icon ${props.completed && "done"}`}
          onClick = {props.onComplete}
        >
          <img src={check}></img> 
        </span>

        <p className = {`todo-text ${props.completed && "done"}`}>{props.text}</p>

        <span 
          className = 'delete-icon'
          onClick={props.onDelete}
        >
            <img src={deleteIcon}></img>
        </span>
      </li>
    );
  }
  
  export { TodoItem };

