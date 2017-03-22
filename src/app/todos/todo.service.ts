import { Injectable } from '@angular/core';
import {Todo} from "./todo";

@Injectable()
export class TodoService {
  private todos: Todo[] = [
      new Todo('Morning exercise with friends', 'Meet at Jln. Kayu, 5.00 AM', '2017-01-19', '2017-01-19', 'Medium'),
      new Todo('Work deadline', 'Creating simple chat apps', '2017-01-19', '2017-02-05', 'High')
  ];

  private completedTodos: Todo[] = [];

  constructor() { }

  getTodos(){
    return this.todos;
  }

  getCompletedTodos(){
    return this.completedTodos;
  }

  getTodo(id: number){
    return this.todos[id];
  }

  deleteTodo(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  editTodo(oldTodo: Todo, newTodo: Todo) {
    this.todos[this.todos.indexOf(oldTodo)] = newTodo;
  }

  markCompleted(todo: Todo) {
    this.completedTodos.push(todo);
    this.deleteTodo(todo);
  }

}
