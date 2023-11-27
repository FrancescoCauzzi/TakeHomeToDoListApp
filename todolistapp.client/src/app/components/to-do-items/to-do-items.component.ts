import { Component, OnInit, Input } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ToDoItem } from 'src/app/ToDoItem';
import { TodoService } from '../../services/todo.service';
import { CustomHttpResponse } from 'src/app/CustomHttpResponse';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss'],
})
export class ToDoItemsComponent implements OnInit {
  toDos: ToDoItem[] = [];
  currentItemToDelete: ToDoItem | null = null;
  @Input() toDoItem: ToDoItem = {
    id: 0,
    title: '',
    content: '',
  };
  public faTrashCan = faTrashCan;
  public faPenToSquare = faPenToSquare;

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService.getToDoItems().subscribe(
      (httpResponse: CustomHttpResponse) => {
        // Check if the response is successful and has data
        if (httpResponse.success && httpResponse.data) {
          this.toDos = httpResponse.data;
        } else {
          // Handle the case where the response is not successful
          console.error('Failed to load ToDo items:', httpResponse.message);
        }
      },
      (error) => {
        // Handle any errors that occur during the HTTP request
        console.error('Error fetching ToDo items:', error);
      }
    );
  }

  onDelete(toDoItem: ToDoItem) {
    this.toDoService.deleteToDoItem(toDoItem).subscribe(
      (httpResponse) => {
        // Check if the response is successful and has data
        if (httpResponse.success) {
          console.log('ToDo item deleted successfully:', httpResponse.message);
          this.toDos = this.toDos.filter((item) => item.id !== toDoItem.id); // Remove the deleted item from the list
        } else {
          // Handle the case where the response is not successful
          console.error('Failed to load ToDo items:', httpResponse.message);
        }
      },
      (error) => {
        // Handle any errors that occur during the HTTP request
        console.error('Error fetching ToDo items:', error);
      }
    );
  }
  openDeleteModal(item: ToDoItem) {
    console.log('Opening delete modal for item:', item);

    this.currentItemToDelete = item;
  }

  confirmDelete() {
    if (this.currentItemToDelete) {
      // Perform delete action
      this.onDelete(this.currentItemToDelete);
    }
  }
}
