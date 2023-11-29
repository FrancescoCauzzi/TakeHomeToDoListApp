import { Component, OnInit, Input } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ToDoItem } from 'src/app/IToDoItem';
import { TodoService } from '../../services/todo.service';
import { IHttpResponseItemList } from 'src/app/IHttpResponseItemList';
import { IHttpResponseItem } from 'src/app/IHttpResponseItem';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss'],
})
export class ToDoItemsComponent implements OnInit {
  toDos: ToDoItem[] = [];
  showDeleteTodo: boolean = false;
  subscription: Subscription = new Subscription();

  @Input() toDoItem: ToDoItem = {
    id: 0,
    title: '',
    content: '',
  };
  public faTrashCan = faTrashCan;
  public faPenToSquare = faPenToSquare;
  currentItemToDelete: ToDoItem = {
    title: '',
    content: '',
  };

  constructor(private toDoService: TodoService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showDeleteTodo = value));
  }

  ngOnInit(): void {
    this.toDoService.getToDoItems().subscribe(
      (httpResponse: IHttpResponseItemList) => {
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
          console.log(toDoItem);
          console.log('ToDo item deleted successfully:', httpResponse.message);
          this.toDos = this.toDos.filter((t) => t.id !== toDoItem.id); // Remove the deleted item from the list
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

  modifyTodo(toDoItem: ToDoItem) {
    this.toDoService.editToDoItem(toDoItem).subscribe(
      (response: IHttpResponseItem) => {
        if (response.success) {
          this.toDos = this.toDos.map((t) =>
            t.id === response.item.id ? response.item : t
          );
        } else {
          console.error('Failed to edit item:', response.message);
        }
      },
      (error) => {
        console.error('Error editing item:', error);
      }
    );
  }

  addTodo(item: ToDoItem) {
    this.toDoService.addToDoItem(item).subscribe(
      (response: IHttpResponseItem) => {
        if (response.success) {
          //console.log(response.item);
          this.toDos.push(response.item);
        } else {
          console.error('Failed to add item:', response.message);
        }
      },
      (error) => {
        console.error('Error adding item:', error);
      }
    );
  }
}
