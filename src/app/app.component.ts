import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: String;
  todoList: any;
  newTodoItem: any;

  constructor() {
    this.newTodo = '';
    this.todoList = [];
  }

  addItem() {

    this.newTodoItem = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todoList.push(this.newTodoItem);
    this.newTodo = '';
    event.preventDefault();
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }

  deleteSelectedTodos() {
    
    for (var i = (this.todoList.length - 1); i > -1; i--) {
      if (this.todoList[i].completed) this.todoList.splice(i, 1);
    }
  }

}
