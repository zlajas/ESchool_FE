import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ParentsComponent } from './components/parents/parents.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { MarksComponent } from './components/marks/marks.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { ParentDetailsComponent } from './components/parent-details/parent-details.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { ParentAddComponent } from './components/parent-add/parent-add.component';
import { TeacherAddComponent } from './components/teacher-add/teacher-add.component';
import { SubjectAddComponent } from './components/subject-add/subject-add.component';
import { MarkAddComponent } from './components/mark-add/mark-add.component';
import { MarkDetailsComponent } from './components/mark-details/mark-details.component';
import { StudentSubjectsComponent } from './components/student-subjects/student-subjects.component';
import { ReplacePipe } from './replace-pipe';
import { TeacherSubjectsComponent } from './components/teacher-subjects/teacher-subjects.component';
import { ParentStudentsComponent } from './components/parent-students/parent-students.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { TeacherViewComponent } from './components/teacher-view/teacher-view.component';
import { ParentViewComponent } from './components/parent-view/parent-view.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    ParentsComponent,
    SubjectsComponent,
    MarksComponent,
    StudentDetailsComponent,
    TeacherDetailsComponent,
    ParentDetailsComponent,
    SubjectDetailsComponent,
    StudentAddComponent,
    ParentAddComponent,
    TeacherAddComponent,
    SubjectAddComponent,
    MarkAddComponent,
    MarkDetailsComponent,
    StudentSubjectsComponent,
    ReplacePipe,
    TeacherSubjectsComponent,
    ParentStudentsComponent,
    StudentViewComponent,
    TeacherViewComponent,
    ParentViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
