import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TasksListComponent } from './tasks-list/tasks-list-component'
import { AppComponent } from './app.component';

const routes: Routes = [
    {
    	path: 'tasks',
    	component: TasksListComponent
    },
    {
    	path: 'tasks/:id',
    	component: TaskDetailsComponent
    },
    {
    	path: 'home',
    	component: HomeComponent
    },
    {
    	path: '',
    	redirectTo: '/home',
    	pathMatch: 'full'
    }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }