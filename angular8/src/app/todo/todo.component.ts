import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo';
import {TodoService} from '../services/todo.service';
import { Validators, FormBuilder } 
    from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{

newTodo: Todo = new Todo();

    
 constructor(private todoService: TodoService, private fb: FormBuilder) {

 }

Todoform = this.fb.group({
   title: ['', Validators.required],
  name: ['', Validators.required],
  dateline: ['', Validators.required],
});

addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

    get completeTodo() {
    return this.todoService.completeTodo();
  }

  get inCompleteTodo(){
    return this.todoService.inCompleteTodo();
  }

}
