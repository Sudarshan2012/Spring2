import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentserviceService } from '../studentservice.service';
import { error } from 'console';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
student:any;

  constructor(private studentService:StudentserviceService,
    private router:Router) {

      this.student=new Student();
      
     }

  ngOnInit(): void { 
  }

// saveStudent()
onSubmit()
{
this.studentService.createStudent(this.student).subscribe(data=>{
  console.log(data);
  this.goToStudentList();

},
error=>console.log(error)
);
}

goToStudentList()
{
this.router.navigate(['/students']);
}
  // onSubmit()
//   {
// this.saveStudent();
//   }
}
