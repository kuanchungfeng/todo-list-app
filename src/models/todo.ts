export enum TODO_PROPS {
  id,
  title,
  description,
  completed,
  createTime,
  editable,
}

class Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createTime: Date;
  editable: boolean;

  constructor(todoText: string) {
    this.title = todoText;
    this.description = "";
    this.id = new Date().toISOString();
    this.completed = false;
    this.createTime = new Date();
    this.editable = false;
  }
}

export default Todo;
