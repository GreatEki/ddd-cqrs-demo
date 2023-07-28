import { Request, Response, NextFunction } from "express";
import { TodoService } from "application/TodoService";

export class TodoController {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  createTodoHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { name, description } = req.body;

      const newTodo = await this.todoService.createTodo({ name, description });
      res.status(201).json({
        success: true,
        data: newTodo,
      });
    } catch (err) {
      next(err);
    }
  };

  completeTodoHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { todoId } = req.params;

      const updatedTodo = await this.todoService.markAsComplete(Number(todoId));
      return res.status(200).json({
        success: true,
        data: updatedTodo,
      });
    } catch (err) {
      next(err);
    }
  };
}
