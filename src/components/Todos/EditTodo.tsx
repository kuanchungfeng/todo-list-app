import React, { useContext, useState } from "react";
import Todo, { TODO_PROPS } from "../../models/todo";

import Button from "../UI/Button/Button";
import TextInput from "../UI/TextInput/TextInput";
import { TodosContext } from "../../store/todos-context";
import classes from "./EditTodo.module.css";

type EditTodoProps = {
  item: Todo;
};

const EditTodo: React.FC<EditTodoProps> = (props) => {
  const { id, title, description } = props.item;
  const [enteredTitle, setEnteredTitle] = useState(title);
  const [enteredDescription, setEnteredDescription] = useState(description);
  const todosCtx = useContext(TodosContext);
  const { updateByColumn } = todosCtx;

  const onChangeTitleHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };

  const onChangeDescriptionHandler = (event: any) => {
    setEnteredDescription(event.target.value);
  };

  const PressEnterHandler = (event: any) => {
    if (event.key === "Enter") {
      update();
    }
  };

  const clickChangeHandler = () => {
    update();
  };

  const update = () => {
    updateByColumn(id, TODO_PROPS.title, enteredTitle);
    updateByColumn(id, TODO_PROPS.description, enteredDescription);
    updateByColumn(id, TODO_PROPS.editable);
  };

  return (
    <div className={classes.container}>
      <div>
        <TextInput
          value={title}
          onKeyDown={PressEnterHandler}
          onChange={onChangeTitleHandler}
        />
        <TextInput
          className={classes.descriptionInput}
          value={description}
          onKeyDown={PressEnterHandler}
          onChange={onChangeDescriptionHandler}
          placeholder={"Enter some description if you want"}
        />
      </div>
      <Button onClick={clickChangeHandler}>Update</Button>
    </div>
  );
};

export default EditTodo;
