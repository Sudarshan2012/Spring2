import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courses:any;
  isDelete=false;
  message!:String;
  constructor(private studentservice:StudentserviceService,private router:Router,private router1:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getAllCourse();
  }

  private getAllCourse()
  {
    this.studentservice.getAllCourse().subscribe(data=>
      {
        this.courses=data;
        console.log(data);
      })
  }

  updateCourse(id:any)
  {
    this.router.navigate(['update-course',id]);
  }
  deleteCourse(id:any)
  {
    this.studentservice.deleteCourseById(id).subscribe(data=>{
      console.log(data);
  })
  }
  
}
