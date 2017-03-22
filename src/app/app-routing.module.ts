import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./todos/todos.component";
import {TodoEditComponent} from "./todos/todo-edit/todo-edit.component";
import {TodoDetailComponent} from "./todos/todo-detail/todo-detail.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/todo',
        pathMatch: 'full'
    },
    {
        path: 'todo',
        component: TodosComponent,
        children: [
            {
                path: 'new',
                component: TodoEditComponent
            },
            {
                path: ':id',
                component: TodoDetailComponent
            },
            {
                path: ':id/edit',
                component: TodoEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
