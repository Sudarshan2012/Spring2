import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment';
import { StudentserviceService } from '../studentservice.service';
import { error } from 'console';

@Component({
  selector: 'app-assign-student',
  templateUrl: './assign-student.component.html',
  styleUrls: ['./assign-student.component.css']
})
export class AssignStudentComponent implements OnInit {
assignment:Assignment=new Assignment();
  constructor(private studentService:StudentserviceService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.studentService.assignStudent(this.assignment.stdId,
      this.assignment.corId).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error))
  }
}
