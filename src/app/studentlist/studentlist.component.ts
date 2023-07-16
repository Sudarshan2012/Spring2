import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class studentlistComponent implements OnInit {
students:any;
isDelete=false;
message!:String;

  constructor(private studentService:StudentserviceService,
    private router:Router,
    private route:ActivatedRoute) {

       
     }

  ngOnInit(): void {
    this.getAllStudent();
  }
  private getAllStudent()
  {
    this.studentService.getAllStudentList().subscribe(data=>
      {
        this.students=data;
        //console.log(data);
      })
  }
  updateStudent(id:any)
  {
   this.router.navigate(['update-student',id]);
  }
  deleteStudent(id:any)
  {
    this.studentService.deleteStudentById(id).subscribe(data=>{
   console.log(data);
   


    this.reloadPage();
    });
  }

  reloadPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([currentUrl]);
   
  });
}
  
}