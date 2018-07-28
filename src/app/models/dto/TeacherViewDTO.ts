import { Mark } from "../mark";
import { EGradeYear } from "../subject";


export class TeacherViewDTO {
  teachersAndSubjects: SubjectsOfTeacherDTO[];
}

export class SubjectsOfTeacherDTO {
  subjectId: number;
  subjectName: string;
  grade: EGradeYear;
  studentsWithMarks: StudentsAndMarksDTO[];
}
export class StudentsAndMarksDTO {
  studentId: string;
  studentName: string;
  marks: Mark[];
}