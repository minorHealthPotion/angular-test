import { Injectable } from "@angular/core";
import { TestData } from "../data/TestData";
import { Category } from "../model/Category";

@Injectable({
  providedIn: "root"
})
export class DataHandleService {
  constructor() {}

  //создание метода без параметров : - через двоеточие указывает как и у
  //переменной - вызывает массив возвращает его из созданного класса
  getCategories(): Category[] {
    return TestData.categories;
  }
}
