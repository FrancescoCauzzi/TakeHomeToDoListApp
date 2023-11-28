import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from 'src/app/IToDoItem';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
})
export class AddTodoItemComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<ToDoItem> = new EventEmitter();
  title: string = '';
  content: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title || !this.content) {
      alert('Please fill in all fields');
      return;
    }
    const newToDo = {
      title: this.title,
      content: this.content,
    };
    this.onAddTodo.emit(newToDo);

    this.title = '';
    this.content = '';
  }
}
