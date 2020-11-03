export interface Subject {
  subject_name: string,
  description: string,
  level: number
}
export class Student {
  id: string;
  student_id: number;
  student_name: string;
  total_score: number;
  subject_names: Subject[] = [
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0},
    {subject_name: "", description: "", level: 0}
  ];
}
