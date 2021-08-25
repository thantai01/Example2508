import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo} from '../../todo';
import {TodoServiceService} from '../../service/todo-service.service';
import {Router} from '@angular/router';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
formEdit: FormGroup = new FormGroup({
  content: new FormControl()
});
hide = false;
  constructor(private todoService: TodoServiceService, private router: Router) {
  }
onBtn() {
    this.hide = !this.hide;
}
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.todoService.getAll().subscribe(todoList => {
      this.todos = todoList;
    }, e => {
      console.log(e);
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  updateId(id: number) {
    const value = this.formEdit.value;
    value.complete = false;
    this.todoService.updateById(id, value).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(() => {
        this.content.reset();
      });
    }
  }
  deleteItem(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
}
