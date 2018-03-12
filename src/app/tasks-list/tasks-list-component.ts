import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
	selector: 'app-tasks-list',
	providers: [TasksService],
	templateUrl: './tasks-list.component.html',
  	styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
	tasks: Task[] = [];
	newTask: Task;
	create(task: Task) {
		this.tasksService.create(task).subscribe(r => this.getTasks());
	}
	update(task: Task) {
		this.tasksService.save(task).subscribe(r => console.log(task));
	}
	delete(task: Task) {
		this.tasksService.delete(task).subscribe(r => this.tasks.splice(this.tasks.indexOf(task), 1));
	}
	constructor(private tasksService: TasksService) {
		this.newTask = {id: null, completed: false, description: "", time: 0, title: "", due: null};
	}
	private getTasks(){
		this.tasksService.getAll().subscribe(p=>this.tasks = p);
	}
	ngOnInit(){
		this.getTasks()
	}
}
