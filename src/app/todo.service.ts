import { Injectable, signal } from "@angular/core";
import { Todo } from "./todo";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos = signal<Todo[]>([]);
  private nextId = 1;

  // Get all todos
  getTodos = this.todos.asReadonly();

  // Add one Todo to list
  addTodo = (title: string) => {
    const newTodo: Todo = {
      id: this.nextId++,
      title: title.trim(),
      completed: false,
    };

    this.todos.update((tds) => [...tds, newTodo]);
  };

  toggleTodo = (id: number) => {
    this.todos.update((tds) =>
      tds.map((td) => (td.id == id ? { ...td, completed: !td.completed } : td)),
    );
  };

  deleteTodo = (id: number) => {
    this.todos.update((tds) => tds.filter((td) => td.id !== id));
  };
}
