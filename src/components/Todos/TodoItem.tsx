import DisplayTodo from "./DisplayTodo";
import EditTodo from "./EditTodo";
import React from "react";
import Todo from "../../models/todo";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  item: Todo;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { editable } = props.item;

  return (
    <>
      <li className={classes.task}>
        {editable && <EditTodo item={props.item} />}
        {!editable && <DisplayTodo item={props.item} />}
      </li>
    </>
  );
};

export default TodoItem;
