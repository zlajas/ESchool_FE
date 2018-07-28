enum ESemester {
    FIRST = 1,
    SECOND,
}
export enum EGradeYear {
    FIRST = 1,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH,
    SIXTH,
    SEVENTH,
    EIGHTH
}

export class Subject {
    subjectId?: number;
    subjectName: string;
    weeklyFund: number;
    semester: ESemester;
    grade: EGradeYear;
  }