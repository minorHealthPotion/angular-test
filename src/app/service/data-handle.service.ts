import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { TestData } from "../data/TestData";
import { Category } from "../model/Category";
import { Task } from "../model/Task";

@Injectable({
  providedIn: "root"
})
export class DataHandleService {
  constructor() {}

  tasksSubject = new Subject<Task[]>();

  //создание метода без параметров : - через двоеточие указывает как и у
  //переменной - вызывает массив возвращает его из созданного класса
  getCategories(): Category[] {
    return TestData.categories;
  }
  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }
  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
