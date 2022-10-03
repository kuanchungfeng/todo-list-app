import React, { useContext } from "react";

import Section from "../UI/Section/Section";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  let { items, queryString } = todosCtx;

  let content = <h2>No tasks found. Start adding some!</h2>;

  if (queryString !== "") {
    items = items.filter((item) => item.title.includes(queryString));
  }

  if (items.length > 0) {
    content = (
      <ul>
        {items.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </ul>
    );
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Todos;
