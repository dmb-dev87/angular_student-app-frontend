import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../model/student';
import { StudentDomainService } from '../services/student-domain.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  student: Student;
  id: string;

  levels = [
    {value: 0, viewValue: 'Level-0'},
    {value: 1, viewValue: 'Level-1'},
    {value: 2, viewValue: 'Level-2'},
    {value: 3, viewValue: 'Level-3'},
  ];

  constructor(private studentService: StudentDomainService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
    this.activateRouter.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    })
  }

  ngOnInit(): void {
    if (this.id === null) {
      this.student = new Student();
    } else {
      this.studentService.getStudent(this.id)
        .subscribe(
          (student: any) => {
            this.student = student;
            console.log("+++++++++++++++", this.student);
          },
          error => {
            this.student = new Student();
          }
        )
    }
  }

  calcTotal(): void {
    //calc total score
    let total = 0;
    for (let subject of this.student.subject_names) {
      switch (subject.level) {
        case 0:
          total += 0;
          break;
        case 1:
          total += 0.5;
          break;
        case 2:
          total += 0.75;
          break;
        case 3:
          total += 1;
          break;
        default:
          break;
      }
    }
    this.student.total_score = total;
  }

  saveStudent() {
    console.log("+++++++++++", this.student);

    if (this.id === null) {
      this.studentService.createStudent(this.student).toPromise().then(() => {
        window.alert("The student is successfully created.");
        this.router.navigate([`student-list`]);
      });
    } else {
      this.studentService.updateStudent(this.student, this.id).toPromise().then(() => {
        window.alert("The student is successfully updated.");
        this.router.navigate([`student-list`]);
      });
    }
  }

}
