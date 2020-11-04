import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Student } from '../model/student';

const API_URL: string = 'https://uyli7ueqti.execute-api.us-east-2.amazonaws.com/dev/students';

@Injectable({
  providedIn: 'root'
})
export class StudentDomainService {
  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(API_URL)
      .map((students: Array<Object>) => {
        let studentMap: Student[] = [];
        students && students.forEach((student)=>{
          studentMap.push({
            id: student['id'],
            student_id: student['student_id'],
            student_name: student['student_name'],
            total_score: student['total_score'],
            subject_names: student['subject_names']
          });
        });
        return studentMap;
      });
  }

  getStudent(id) {
    return this.http.get(`${API_URL}/${id}`);
  }

  createStudent(student: Student) {
    let data = JSON.stringify(student);
    return this.http.post(API_URL, data);
  }

  updateStudent(student: Student, id: string) {
    let data = JSON.stringify(student);
    return this.http.put(`${API_URL}/${id}`, data);
  }

  deleteStudent(id) {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
