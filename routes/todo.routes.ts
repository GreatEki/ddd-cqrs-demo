import { Router } from "express";
import { TodoController } from "interfaces/TodoController";
import { TodoService } from "application/TodoService";
import { TodoRepository } from "infrastructure/TodoRepository";

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

const router = Router();

router.route("/todo").post(todoController.createTodoHandler);

export { router };
