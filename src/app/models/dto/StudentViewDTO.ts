import { Mark } from "../mark";
import { EGradeYear } from "../subject";

export class StudentViewDTO {
    subjectName: string;
    grade: EGradeYear;
    marks: Mark[];
    teacher: string;
    date: Date[];
  }