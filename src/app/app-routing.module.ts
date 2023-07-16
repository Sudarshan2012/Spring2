import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { studentlistComponent } from './studentlist/studentlist.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AssignStudentComponent } from './assign-student/assign-student.component';
import { CourselistComponent } from './courselist/courselist.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {path:"create-student", component:CreateStudentComponent},
  {path:"students",component:studentlistComponent},
  {path:"update-student/:id",component:UpdateStudentComponent},
  {path:"update-course/:id",component:UpdateCourseComponent},
  {path:"create-course",component:CreateCourseComponent},
  {path:"assignment",component:AssignStudentComponent},
  {path:"courselist",component:CourselistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
