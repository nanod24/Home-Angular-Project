import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./Shared/Models/user";
import {JsonPipe, NgForOf, NgClass} from "@angular/common";
import {StudentListComponent} from "./student-list/student-list.component";
import {userList} from "./Shared/mockStudent.data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, StudentListComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title= 'User Generation';





}
