import {Component, Input, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";
import {userList} from "../Shared/mockStudent.data";


@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})


export class StudentDetailComponent implements OnInit{
  student: User | undefined;
  userList: User[] = [];
  currentIndex: number = 0;


  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ){}
ngOnInit(): void {
    this.studentService.getStudents().subscribe(users => {
      this.userList = users;

      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.userList.findIndex(user => user.id === id);
          this.student = this.userList[this.currentIndex];
        }
      });
    });
  }
//going back to student list view
  goBack(): void {
    this.router.navigate(['/students']);
  }
//function to move foward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.userList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/students', this.userList[this.currentIndex].id]);
    }
  }

  //function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/students', this.userList[this.currentIndex].id]);
    }
  }

}
