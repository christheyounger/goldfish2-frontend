import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksService } from './tasks.service'
import { TasksListComponent } from './tasks-list/tasks-list-component'
import { TaskDetailsComponent } from './task-details/task-details.component'
import { AppRoutingModule } from './app-routing.module'
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksListComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    OAuthModule.forRoot(),
    HttpModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TasksService, OAuthService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
