import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface ToDoItem {
  id: number;
  title: string;
  content: string;
}

interface HttpResponse {
  success: boolean;
  message: string;
  data: ToDoItem[];
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public toDoItems: ToDoItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getToDoItems();
  }

  getToDoItems() {
    this.http
      .get<HttpResponse>('https://localhost:7259/API/ToDoItem/GetAllToDoItems')
      .subscribe(
        (result) => {
          console.log(result);
          console.log(result.data);

          this.toDoItems = result.data;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
