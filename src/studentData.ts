import type { Student } from "./types/Student";

export const students: Student[] = [
  {
    firstName: "Dirk",
    lastName: "Funk",
    age: 12,
    grades: ["A",2,undefined,3,1,"B",undefined,5],
    transcripts: [
      { subject: "Math", grades: ["A", 2, undefined] },
      { subject: "Sport", grades: [3, 1, "B"] },
      { subject: "Art", grades: [undefined, 5] },
    ],
  },
  {
    firstName: "Anton",
    lastName: "Meier",
    age: 16,
    grades: [1, 4, 3, 1, "A", undefined, 1, 2],
    transcripts: [
      { subject: "Math", grades: ["A", 2, undefined] },
      { subject: "Sport", grades: [3, 1, "B"] },
      { subject: "Art", grades: [undefined, 5] },
    ],
  },
  {
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades: ["A", undefined, 1],
    transcripts: [
      { subject: "Math", grades: ["A", undefined] },
      { subject: "Sport", grades: [1] },
    ],
  },
  {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 22,
    grades: ["A", 1, undefined, 3, 2, 4, 5],
    transcripts: [
      { subject: "Math", grades: ["A", 1, undefined] },
      { subject: "Sport", grades: [3, 2, 4] },
      { subject: "Art", grades: [5] },
    ],
  }
];