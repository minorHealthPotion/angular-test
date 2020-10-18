import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Tast";


export class  TestData {

    static categories: Category[] = [
      {id: 1, title:'работа'},
      {id: 2, title:'семья'},
      {id: 3, title:'отдых'},
      {id: 4, title:'спорт'},
      {id: 5, title:'еда'},
      {id: 6, title:'финансы'},
      {id: 7, title:'машина'},
    ];
    

  static priorities: Priority[] = [
    {id: 1, title:'низкий', color: '#e5e5e5'},
    {id: 2, title:'средний', color: '#e535e5'},
    {id: 3, title:'высокий', color: '#e555e5'},
    {id: 4, title:'оч высокий', color: '#e2e5e5'},
  ];

  static tasks: Task[] = [
    {
      id : 1,
      title : 'залить бензин полный бак',
      priority: TestData.priorities[2],
      comleted : false,
      catigory: TestData.categories[6],
      data: new Date(value:'2019-0-11'),
    },
    {
      id : 2,
      title : 'приготовить ужин',
      priority: TestData.priorities[4],
      comleted : false,
      catigory: TestData.categories[4],
      data: new Date(value:'2019-03-11'),
    },
    {
      id : 3,
      title : 'перевести дух',
      priority: TestData.priorities[1],
      comleted : false,
      catigory: TestData.categories[2],
      data: new Date(value:'2019-06-13'),
    },
  ];  
 } 