import { useContext, useState } from "react";

import Button from "../UI/Button/Button";
import Section from "../UI/Section/Section";
import TextInput from "../UI/TextInput/TextInput";
import { TodosContext } from "../../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const todosCtx = useContext(TodosContext);

  const onChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (enteredValue.trim().length > 0) {
      todosCtx.addTodo(enteredValue);
    }
  };

  return (
    <Section>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextInput value={enteredValue} onChange={onChangeHandler} />
        <Button>Add Task</Button>
      </form>
    </Section>
  );
};

export default NewTodo;
