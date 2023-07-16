import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  courses:any;
  id!:any;
  constructor(private studentService:StudentserviceService,private router:Router,private Activerouter:ActivatedRoute) {
    this.courses=new Course();
   }

  ngOnInit(): void {
    this.id=this.Activerouter.snapshot.params['id'];
    this.studentService.getCourseById1(this.id).subscribe(data=>{
      this.courses=data;
    },
    error=>console.log(error));
  }
  onSubmit() {
    this.studentService.updateCourseById(this.id,this.courses).subscribe(data=>{
      console.log(data);
      this.goToStudentList();
    },
    error=>console.log(error));
  }

    goToStudentList()
    {
      this.router.navigate(['/courselist']);
    }
}
