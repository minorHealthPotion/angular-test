import { Component, OnInit } from "@angular/core";
import { DataHandleService } from "../service/data-handle.service";
import { Task } from "../model/Task";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  private displayedColumns = string[] = ['color','id', 'title', 'date', 'priority', 'category'];
  private dataSource: MatTableDataSource<Task>; //контейнер - источник данных для таблицы

  tasks: Task[];
  constructor(private dataHandle: DataHandleService) {}

  ngOnInit() {
    this.dataHandle.tasksSubject.subscribe(tasks => (this.tasks = tasks));
    //датасорс обязательно надо создавать для таблицы туда присваевается любой источник бд
    this.dataSource = new MatTableDataSource(); 

    this.refreshTable();
  }
  toggleTaskCompleted(task: Task) {
    task.completed != task.completed;
  }
  private getPriorityColor(task: Task):string{
      if (task.priority && task.priority.color){
        return task.priority.color;
      }
      return  '#fff';
  }

  private refreshTable(){
    this.dataSource.data =  this.task;
}
}


