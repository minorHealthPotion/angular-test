import { Category } from "./category";
import { Priority } from "./priority";

export class Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: Priority;
  category?: Category;
  date?: Date;
  constructor(
    id: number,
    title: string,
    completed: boolean,
    priority?: Priority,
    category?: Category,
    date?: Date
  ) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.category = category;
    this.priority = priority;
    this.date = date;
  }
}
