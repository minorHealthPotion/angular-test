import { Component, OnInit } from "@angular/core";
import { Category } from "../model/Category";
import { DataHandleService } from "../service/data-handle.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  //внедрение инжектбл в класс приватно только сюда - создаем переменную и присваеваем ей класс из нашего сервиса(получаем доступ создав ссылку )
  constructor(private dataHandler: DataHandleService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
  }
  showTaskByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category);
  }
}
