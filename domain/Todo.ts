export interface TodoProps {
  name: string;
  description?: string;
  isCompleted: boolean;
}

interface CreateTodoArg {
  name: string;
  description?: string;
}

export class Todo {
  private _name: string;
  private _description: string | undefined;
  private _isCompleted: boolean;

  private constructor(props: TodoProps) {
    this._name = props.name;
    this._description = props.description;
    this._isCompleted = props.isCompleted;
  }

  static create(args: CreateTodoArg) {
    return new Todo({
      name: args.name,
      isCompleted: false,
      description: args.description,
    });
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get isCompleted() {
    return this._isCompleted;
  }

  markAsComplete() {
    this._isCompleted = true;
  }
}
