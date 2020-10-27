import { Category } from "./Category";
import { Priority } from "./Priority";

export class Task {
  id: number;
  title: string;
  priority?: Priority;
  category?: Category;
  date?: Date;
  completed: boolean;
  constructor(
    id: number,
    title: string,
    priority: Priority,
    category?: Category,
    date?: Date,
    completed: boolean
  ) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.completed = completed;
    this.category = category;
    this.date = date;
  }
}
