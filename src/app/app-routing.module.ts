import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ParentsComponent } from './components/parents/parents.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { MarksComponent } from './components/marks/marks.component';
import {StudentAddComponent} from './components/student-add/student-add.component';
import {SubjectAddComponent} from './components/subject-add/subject-add.component';
import {ParentAddComponent} from './components/parent-add/parent-add.component';
import {TeacherAddComponent} from './components/teacher-add/teacher-add.component';
import {StudentDetailsComponent} from './components/student-details/student-details.component';
import {ParentDetailsComponent} from './components/parent-details/parent-details.component';
import {TeacherDetailsComponent} from './components/teacher-details/teacher-details.component';
import {SubjectDetailsComponent} from './components/subject-details/subject-details.component';
import {StudentSubjectsComponent} from './components/student-subjects/student-subjects.component';
import {MarkDetailsComponent} from './components/mark-details/mark-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: LoginComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'parents', component: ParentsComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'marks', component: MarksComponent},
  {path: 'mark-detail/:id', component: MarkDetailsComponent},
  {path: 'parent-detail/:id', component: ParentDetailsComponent},
  {path: 'teacher-detail/:id', component: TeacherDetailsComponent},
  {path: 'subject-detail/:id', component: SubjectDetailsComponent},
  {path: 'subject-grade-detail/:id/:subjectId', component: MarksComponent},
  {path: 'student-add', component: StudentAddComponent},
  {path: 'parent-add', component: ParentAddComponent},
  {path: 'teacher-add', component: TeacherAddComponent},
  {path: 'subject-add', component: SubjectAddComponent},
  {path: 'student-detail/:id', component: StudentDetailsComponent,
    children: [
      {path: ':subjectId', component: StudentDetailsComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
