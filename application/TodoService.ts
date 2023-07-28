import { TodoRepository } from "infrastructure/TodoRepository";
import { Todo, CreateTodoArg } from "domain/Todo";
import { Todo as TodoDoc } from "@prisma/client";
import { GetResult } from "@prisma/client/runtime/library";

export interface ITodoService {
  createTodo(todo: Todo): Promise<TodoDoc>;
  markAsComplete(id: number): Promise<TodoDoc>;
}

export class TodoService implements ITodoService {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  createTodo(arg: CreateTodoArg): Promise<TodoDoc> {
    const newTodo = Todo.create({
      name: arg.name,
      description: arg.description,
    });
    return this.todoRepository.create(newTodo);
  }

  markAsComplete(id: number): Promise<TodoDoc> {
    return this.todoRepository.completeTodo(id);
  }

  getAllTodos() {
    return this.todoRepository.getTodos();
  }

  getTodo(id: number) {
    return this.todoRepository.getTodo(id);
  }
}
