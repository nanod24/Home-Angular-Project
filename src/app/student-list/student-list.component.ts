
import { Component, OnInit } from '@angular/core';
import { User} from "../Shared/Models/user";
import {NgForOf, NgClass, NgStyle} from "@angular/common";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {StudentService} from "../services/student.service";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgForOf,
    NgForOf,
    StudentDetailComponent, NgClass, NgStyle,
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  //Placeholder values for the table
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: User[] = [];

  constructor(private  studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe({
      next: (data: User[] )=> this.userList = data,
      error: err => console.error("Error FEtching", err),
      complete:  ()=> console.log(" Fetchin Complete")


    })

  }


  //Catch the onclick event from the html
  selectedStudent?: User;
  //function to set which student to display
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }

  protected readonly Object = Object;
}
