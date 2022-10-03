import React, { useContext } from "react";
import Todo, { TODO_PROPS } from "../../models/todo";

import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import { TodosContext } from "../../store/todos-context";
import classes from "./DisplayTodo.module.css";

type DisplayTodoProps = {
  item: Todo;
};

const DisplayTodo: React.FC<DisplayTodoProps> = (props) => {
  const todosCtx = useContext(TodosContext);
  const { updateByColumn, removeTodo } = todosCtx;
  const { completed, id, title, description, editable } = props.item;

  return (
    <div className={classes.container}>
      <div>
        <Checkbox
          checked={completed}
          onChange={() => updateByColumn(id, TODO_PROPS.completed)}
          disabled={editable}
        />
        <span
          onDoubleClick={() => updateByColumn(id, TODO_PROPS.editable)}
          className={completed ? classes.finish : ""}
        >
          {title}
        </span>
        {description && (
          <div onDoubleClick={() => updateByColumn(id, TODO_PROPS.editable)}>
            <span
              className={`${classes.description} ${
                completed ? classes.finish : ""
              }`}
            >
              {description}
            </span>
          </div>
        )}
      </div>
      <Button onClick={() => removeTodo(id)}>Delete</Button>
    </div>
  );
};

export default DisplayTodo;
