import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-completed-list',
  templateUrl: './todo-completed-list.component.html'
})
export class TodoCompletedListComponent implements OnInit {
  completedTodos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.completedTodos = this.todoService.getCompletedTodos();
  }

}
