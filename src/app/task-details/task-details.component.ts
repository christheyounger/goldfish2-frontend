import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { TasksService } from '../tasks.service';
import { Task } from '../task';

@Component({
	selector: 'app-task-details',
	templateUrl: './task-details.component.html',
	styles: []
})

export class TaskDetailsComponent implements OnInit, OnDestroy {
	task: Task;
	sub: any;

	constructor(
		private route: ActivatedRoute,
		private tasksService: TasksService,
		private router: Router
	) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let id = Number.parseInt(params['id']);
			console.log('getting task with id ' + id);
			this.tasksService.get(id).subscribe(p => this.task = p);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	goToTaskList(){
		let link = ['/tasks'];
		this.router.navigate(link);
	}

	save(){
		this.tasksService.save(this.task).subscribe(
			r => console.log('saved'));
	}
}
