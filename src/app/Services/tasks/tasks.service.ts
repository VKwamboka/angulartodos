import { Injectable } from '@angular/core';
import { Todos } from 'src/app/interfaces/todos';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private todos:Todos[ ]=[
    {
    id:1,
    name:"Study",
    description:"Read for exams",
    image:"",
    dueDate:"12/6/2022"
  }
  ]

  constructor() { }

  // logic
  addTodos(todos:Todos):void{
    this.todos.push(todos)
      }

  getTodos():Todos[]{
    return this.todos
  }

  getOneTodo(id:number):Todos{
    return this.todos.find(x=>x.id===id) as Todos;
  }

  updateTodo(id:number, todo:Todos){
    let index= this.todos.findIndex(x=>x.id===id)
    this.todos[index]=todo
  }


  deleteTodos(){

  }
  
}
