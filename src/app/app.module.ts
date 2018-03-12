import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksService } from './tasks.service'
import { TasksListComponent } from './tasks-list/tasks-list-component'
import { TaskDetailsComponent } from './task-details/task-details.component'
import { AppRoutingModule } from './app-routing.module'
import { OAuthService } from 'angular2-oauth2/oauth-service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksListComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TasksService, OAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
