import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {Subscription} from "rxjs";
import {Todo} from "../todo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html'
})
export class TodoEditComponent implements OnInit, OnDestroy {
  todoForm: FormGroup;
  private todoIndex: number;
  private todo: Todo;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.todoIndex = +params['id'];
            this.todo = this.todoService.getTodo(this.todoIndex);
          } else {
            this.isNew = true;
            this.todo = null;
          }
          this.initForm();
        }
    );
  }

  onSubmit() {
    const newTodo = this.todoForm.value;
    if (this.isNew) {
      this.todoService.addTodo(newTodo);
    } else {
      this.todoService.editTodo(this.todo, newTodo);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let todoTitle = '';
    let todoDescription = '';
    let todoStartDate = '';
    let todoEndDate = '';
    let todoPriority = '';

    if (!this.isNew) {
      todoTitle = this.todo.title;
      todoDescription = this.todo.description;
      todoStartDate = this.todo.startDate;
      todoEndDate = this.todo.endDate;
      todoPriority = this.todo.priority;
    }

    this.todoForm = this.formBuilder.group({
      title: [todoTitle, Validators.required],
      description: [todoDescription, Validators.required],
      startDate: [todoStartDate, Validators.required],
      endDate: [todoEndDate, Validators.required],
      priority: [todoPriority, Validators.required],
    });


  }
}
