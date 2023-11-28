import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToDoItem } from 'src/app/IToDoItem';

@Component({
  selector: 'app-delete-todo-item',
  templateUrl: './delete-todo-item.component.html',
  styleUrls: ['./delete-todo-item.component.scss'],
})
export class DeleteTodoItemComponent {
  @Output() deleteRequest = new EventEmitter<ToDoItem>();

  @Input() itemToDelete: ToDoItem = {
    title: '',
    content: '',
  };
  onDeleteRequest(itemToDelete: ToDoItem) {
    this.deleteRequest.emit(itemToDelete); // Emit the item to be deleted
  }
}
