import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItem } from 'src/app/IToDoItem';

@Component({
  selector: 'app-modify-todo-item',
  templateUrl: './modify-todo-item.component.html',
  styleUrls: ['./modify-todo-item.component.scss'],
})
export class ModifyTodoItemComponent {
  @Output() onModifyTodo: EventEmitter<ToDoItem> = new EventEmitter();
  @Input() itemToModify: ToDoItem = {
    title: '',
    content: '',
  };
  title: string = '';
  content: string = '';

  onSubmit() {
    if (!this.title || !this.content) {
      alert('Please fill in all fields');
      return;
    }

    const modifiedItem: ToDoItem = {
      ...this.itemToModify,
      title: this.title,
      content: this.content,
    };

    this.onModifyTodo.emit(modifiedItem);

    this.title = '';
    this.content = '';
  }
}
