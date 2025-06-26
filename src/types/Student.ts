export interface Student {
    firstName: string, 
    lastName: string, 
    age: number,
    grades: Grade[],
}

export type Grade = 1 | 2 | 3 | 4 | 5 | 6  | "A" | "B" | "C" | "D" | "E" | "F" | undefined;