import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

student:any;
  id!:any;

  constructor(private studentService:StudentserviceService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
      this.student =new Student();
    }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data=>{
      this.student=data;
    },
    error=>console.log(error));
  }

  onSubmit() {
    this.studentService.updateStudentById(this.id,this.student).subscribe(data=>{
      console.log(data);
      this.goToStudentList();
    },
    error=>console.log(error));
    }

    goToStudentList()
    {
      this.router.navigate(['/students']);
    }
   
    
}
