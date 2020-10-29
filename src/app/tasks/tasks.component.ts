import { Component, OnInit } from "@angular/core";
import { DataHandleService } from "../service/data-handle.service";
import { Task } from "../model/Task";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor(private dataHandle: DataHandleService) {}

  ngOnInit() {
    this.dataHandle.tasksSubject.subscribe(tasks => (this.tasks = tasks));
  }
  toggleTaskCompleted(task: Task) {
    task.completed != task.completed;
  }
}
