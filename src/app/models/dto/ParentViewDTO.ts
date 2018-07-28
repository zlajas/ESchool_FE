import { Mark } from "../mark";
import { EGradeYear } from "../subject";
import { User } from "../user";


export class ParentViewDTO {
  children: ParentsChildrenDTO[];
}

export class ParentsChildrenDTO {
  studentId: string;
  studentsFirstName: string;
  studentsFLatName: string;
  subjectsAndMarks: SubjectsAndMarksDTO[];
}
export class SubjectsAndMarksDTO {
  subjectId: number;
  subjectName: string;
  subjectGrade: EGradeYear;
  teacher: string;
  marks: Mark[];
}