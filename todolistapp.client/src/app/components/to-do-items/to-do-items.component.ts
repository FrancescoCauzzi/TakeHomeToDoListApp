import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ToDoItem } from 'src/app/ToDoItem';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss'],
})
export class ToDoItemsComponent implements OnInit {
  toDos: ToDoItem[] = [];
  public faTrashCan = faTrashCan;
  public faPenToSquare = faPenToSquare;

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.toDoService.getToDoItems().subscribe(
      (httpResponse) => {
        // Check if the response is successful and has data
        if (httpResponse.success) {
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
}
