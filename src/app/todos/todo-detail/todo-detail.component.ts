import {Component, OnInit, OnDestroy} from '@angular/core';
import {Todo} from "../todo";
import {Subscription} from "rxjs";
import {TodoService} from "../todo.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  selectedTodo: Todo;
  private subscription: Subscription;
  private todoIndex: number;

  constructor(private router: Router, private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.todoIndex = params['id'];
          this.selectedTodo = this.todoService.getTodo(this.todoIndex);
        }
    );
  }

  onEdit() {
    this.router.navigate(['/todo', this.todoIndex, 'edit']);
  }

  onDelete() {
    this.todoService.deleteTodo(this.selectedTodo);
    this.router.navigate(['/todo']);
  }

  onComplete() {
    this.todoService.markCompleted(this.selectedTodo);
    this.router.navigate(['/todo']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
