import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';
import { Params } from '@angular/router';
import { Assignment } from './assignment';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
private addStudent="http://localhost:8080/std/addstudent";
private getAllStudent="http://localhost:8080/std/student";
private getStudById="http://localhost:8080/std/student";
private getCourseById="http://localhost:8080/cor/course";
private updateStudent="http://localhost:8080/std/student";
private updateCourse="http://localhost:8080/cor/course"
private deleteStudent="http://localhost:8080/std/student/";
private deleteCourse="http://localhost:8080/cor/course/";
private saveCourse="http://localhost:8080/cor/course";
private geAllCourse="http://localhost:8080/cor/course";
private assignment="http://localhost:8080/api/assignment";

  constructor(private httpClient:HttpClient) { }

  createStudent(student:any):Observable<any>{
    return this.httpClient.post<any>(this.addStudent,student);
  }
  getAllStudentList():Observable<Student[]>
  {
    return this.httpClient.get<Student[]>(`${this.getAllStudent}`);
  }
  getAllCourse():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.geAllCourse}`);
  }
  getStudentById(id:number):Observable<Student>
  {
    return this.httpClient.get<Student>(`${this.getStudById}/${id}`);
  }

  getCourseById1(id:number):Observable<Course>
  {
    return this.httpClient.get<Course>(`${this.getCourseById}/${id}`);
  } 

  updateStudentById(id:number,student:Student):Observable<Object>
  {
    return this.httpClient.put(`${this.updateStudent}/${id}`,student);
  }

  updateCourseById(id:number,course:Course):Observable<Object>
  {
    return this.httpClient.put(`${this.updateCourse}/${id}`,course);
  }

  deleteStudentById(id:any):Observable<any>
  {
    return this.httpClient.delete<any>(this.deleteStudent+id);
  }
  deleteCourseById(id:any):Observable<any>
  {
    return this.httpClient.delete<any>(this.deleteCourse+id);
  }
  createCourse(course:any):Observable<any>{
    return this.httpClient.post<any>(this.saveCourse,course);
  }

  assignStudent(stdId:number,corId:number):Observable<Params>
  {
    return this.httpClient.post(`${this.assignment}/${stdId}/${corId}`,Assignment);
  }
}
