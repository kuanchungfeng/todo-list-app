import React, { useState } from "react";
import Todo, { TODO_PROPS } from "../models/todo";

type ContentProps = {
  children: React.ReactNode;
};

type TodosContextObj = {
  items: Todo[];
  queryString: string;
  addTodo: (title: string) => void;
  updateByColumn: (id: string, column: TODO_PROPS, value?: any) => void;
  removeTodo: (id: string) => void;
  sortByColumn: (column: TODO_PROPS, isDesc: boolean) => void;
  changeQueryString: (queryStr: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  queryString: "",
  addTodo: (title: string) => {},
  updateByColumn: (id: string, column: TODO_PROPS, value?: any) => {},
  removeTodo: (id: string) => {},
  sortByColumn: (column: TODO_PROPS, isDesc: boolean) => {},
  changeQueryString: (queryStr: string) => {},
});

const TodosContextProvider: React.FC<ContentProps> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [queryString, setQueryString] = useState("");

  const addTodoHandler = (title: string) => {
    const newTodo = new Todo(title);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const updateByColumnHandler = (
    todoId: string,
    column: TODO_PROPS,
    value?: any
  ) => {
    setTodos((prevTodos) => {
      const newTodo = prevTodos.map((obj) => {
        if (obj.id === todoId) {
          switch (column) {
            case TODO_PROPS.title:
              return { ...obj, title: value };
            case TODO_PROPS.description:
              return { ...obj, description: value };
            case TODO_PROPS.completed:
              return { ...obj, completed: !obj.completed };
            case TODO_PROPS.editable:
              return { ...obj, editable: !obj.editable };
            default:
              break;
          }
        }
        return obj;
      });
      return newTodo;
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const sortByColumnHandler = (column: TODO_PROPS, isDesc: boolean = false) => {
    setTodos((prevTodos) => {
      let sortFunction;
      switch (column) {
        case TODO_PROPS.createTime:
          sortFunction = (a: Todo, b: Todo) =>
            Number(a.createTime) - Number(b.createTime);
          break;
        case TODO_PROPS.completed:
          sortFunction = (a: Todo, b: Todo) =>
            Number(a.completed) - Number(b.completed);
          break;
        case TODO_PROPS.title:
          sortFunction = (a: Todo, b: Todo) => a.title.localeCompare(b.title);
          break;
        case TODO_PROPS.editable:
          sortFunction = (a: Todo, b: Todo) =>
            Number(a.editable) - Number(b.editable);
          break;
        case TODO_PROPS.description:
          sortFunction = (a: Todo, b: Todo) =>
            a.description.localeCompare(b.description);
          break;
        default:
          return prevTodos;
      }
      const newArray = prevTodos.slice().sort(sortFunction);
      return isDesc ? newArray.reverse() : newArray;
    });
  };

  const changeQueryStringHandler = (queryString: string) => {
    setQueryString(queryString);
  };

  const contextValue: TodosContextObj = {
    items: todos,
    queryString: queryString,
    addTodo: addTodoHandler,
    updateByColumn: updateByColumnHandler,
    removeTodo: removeTodoHandler,
    sortByColumn: sortByColumnHandler,
    changeQueryString: changeQueryStringHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
