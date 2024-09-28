import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
//import {routes} from "./app/app.routes";
import {StudentDetailComponent} from "./app/student-detail/student-detail.component";
import {StudentListComponent} from "./app/student-list/student-list.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";



const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full'},
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'modify-student', component: ModifyStudentComponent },
  { path: '**', component: PageNotFoundComponent }

]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});


