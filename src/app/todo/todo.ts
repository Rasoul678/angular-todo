import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodoService } from "../todo.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-todo",
  imports: [CommonModule, FormsModule],
  templateUrl: "./todo.html",
  styleUrl: "./todo.css",
})
export class Todo {
  protected title = "todo componet";

  newTodo = "";

  // constructor(public todoService: TodoService) {}
  todoService = inject(TodoService);

  addTodo = () => {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = "";
    }
  };

  toggleTodo = (id: number) => {
    this.todoService.toggleTodo(id);
  };

  deleteTodo = (id: number) => {
    this.todoService.deleteTodo(id);
  };
}
