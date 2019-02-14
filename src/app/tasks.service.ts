import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs/Observable';
import { Task } from './task';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {
	private baseUrl: string = 'http://localhost:8000/api/tasks';
	constructor(private http : Http, private oAuthService: OAuthService){
	}
	getAll(): Observable<Task[]>{
		let tasks$ = this.http
			.get(`${this.baseUrl}`, {headers: this.getHeaders()})
			.map(mapTasks);
		return tasks$;
	}
	get(id: number): Observable<Task>{
		let task$ = this.http
			.get(`${this.baseUrl}/${id}`, {headers: this.getHeaders()})
			.map(mapTask)
		return task$;
	}
	create(task: Task): Observable<Response>{
		let headers = this.getHeaders();
		headers.append('Content-type', 'application/json');
		return this.http.post(`${this.baseUrl}`, JSON.stringify(task), {headers});
	}
	save(task: Task): Observable<Response>{
		let headers = this.getHeaders();
		headers.append('Content-type', 'application/json');
		return this.http.put(`${this.baseUrl}`, JSON.stringify(task), {headers});
	}
	delete(task: Task): Observable<Response>{
		let headers = this.getHeaders();
		return this.http.delete(`${this.baseUrl}/${task.id}`, {headers});
	}
	private getHeaders(){
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Authorization', 'Bearer ' + this.oAuthService.getAccessToken());
		return headers;
	}
}
function mapTasks(response:Response): Task[]{
  return response.json().map(toTask)
}

function mapTask(response:Response): Task{
	return toTask(response.json());
}

function toTask(r:any): Task{
  return <Task>({
    id: Number.parseInt(r.id),
    completed: r.completed,
    title: r.title,
    description: r.description,
    time: Number.parseInt(r.time),
    due: r.due ? new Date(r.due) : null
  });
}