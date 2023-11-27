import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/app/ToDoItem';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from '../CustomHttpResponse';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://localhost:7259/API/ToDoItem/';

  constructor(private http: HttpClient) {} // Inject HttpClient

  getToDoItems(): Observable<CustomHttpResponse> {
    // Return the Observable
    return this.http.get<CustomHttpResponse>(this.apiUrl + 'GetAllToDoItems');
  }

  deleteToDoItem(todoItem: ToDoItem): Observable<CustomHttpResponse> {
    const url = `${this.apiUrl}Delete/${todoItem.id}`;
    return this.http.delete<CustomHttpResponse>(url); // Return the Observable
  }
}
