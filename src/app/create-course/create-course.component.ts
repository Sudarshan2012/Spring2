import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { StudentserviceService } from '../studentservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
course:any;


  constructor(private studentService:StudentserviceService,private router:Router) { 

    this.course=new Course();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentService.createCourse(this.course).subscribe(data=>{
      console.log(data);
      this.goToCourseList();
    
    },
    error=>console.log(error)
    );
  }

  goToCourseList()
  {
    this.router.navigate(['/courselist']);
  }

  
}
