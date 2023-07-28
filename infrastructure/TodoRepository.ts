import prisma from "config/prisma-client";
import { Todo } from "domain/Todo";
import { Todo as TodoDoc } from "@prisma/client";

export class TodoRepository {
  async create(todo: Todo): Promise<TodoDoc> {
    return await prisma.todo.create({
      data: {
        name: todo.name,
        description: todo.description,
        isCompleted: false,
      },
    });
  }

  async completeTodo(id: number): Promise<TodoDoc> {
    return await prisma.todo.update({
      where: { id },
      data: { isCompleted: true },
    });
  }

  async getTodos(): Promise<TodoDoc[]> {
    return await prisma.todo.findMany();
  }

  async getTodo(id: number): Promise<TodoDoc | null> {
    return await prisma.todo.findUnique({ where: { id } });
  }
}
