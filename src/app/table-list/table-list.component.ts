import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDomainService } from '../services/student-domain.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit {

  constructor(private studentService: StudentDomainService,
              private router: Router) { }

  public students;

  ngOnInit() {
    this.loadStudents();
  }

  private loadStudents() {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data
        },
      err => console.error(err),
      () => {
        console.log("students loaded.");
      }
    );
  }
}
