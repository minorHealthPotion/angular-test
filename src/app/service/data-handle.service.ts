import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { TestData } from "../data/TestData";
import { Category } from "../model/Category";
import { Task } from "../model/Task";

@Injectable({
  providedIn: "root"
})
export class DataHandleService {
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.fillTasks();
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }
  fillTasksByCategory(category: Category /*категория по которой фильтруем*/) {
    const tasks = TestData.tasks.filter(task => task.category === category); //условие фильтрации
    this.tasksSubject.next(TestData.tasks);
  }
}
