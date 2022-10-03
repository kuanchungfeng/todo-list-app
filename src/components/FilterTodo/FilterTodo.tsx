import { useContext, useState } from "react";

import Button from "../UI/Button/Button";
import Section from "../UI/Section/Section";
import { TODO_PROPS } from "../../models/todo";
import TextInput from "../UI/TextInput/TextInput";
import { TodosContext } from "../../store/todos-context";
import classes from "./FilterTodo.module.css";

const FilterTodo: React.FC = () => {
  const [filterValue, setFilterValue] = useState("");
  const [isTimeDesc, setIsTimeDesc] = useState(true);
  const todosCtx = useContext(TodosContext);

  const onChangeHandler = (event: any) => {
    setFilterValue(event.target.value);
  };

  const onSearchTaskHandler = () => {
    todosCtx.changeQueryString(filterValue);
  };

  const onSortByCreateTimeHandler = () => {
    todosCtx.sortByColumn(TODO_PROPS.createTime, isTimeDesc);
    setIsTimeDesc((pre) => !pre);
  };

  return (
    <Section>
      <div className={classes.container}>
        <div>
          <label className={classes.taskLabel}>Task：</label>
          <TextInput value={filterValue} onChange={onChangeHandler} />
          <Button onClick={onSearchTaskHandler}>Search </Button>
        </div>
        <Button onClick={onSortByCreateTimeHandler}>{`Sort By Time ${
          isTimeDesc ? "desc" : "asc"
        }`}</Button>
      </div>
    </Section>
  );
};

export default FilterTodo;
