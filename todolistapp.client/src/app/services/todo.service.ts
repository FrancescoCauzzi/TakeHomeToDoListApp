import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/app/IToDoItem';
import { Observable } from 'rxjs';
import { IHttpResponseItemList } from '../IHttpResponseItemList';
import { IHttpResponseItem } from '../IHttpResponseItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://localhost:7259/API/ToDoItem/';

  constructor(private http: HttpClient) {} // Inject HttpClient

  // method to get all
  getToDoItems(): Observable<IHttpResponseItemList> {
    // Return the Observable
    return this.http.get<IHttpResponseItemList>(
      this.apiUrl + 'GetAllToDoItems'
    );
  }

  deleteToDoItem(todoItem: ToDoItem): Observable<IHttpResponseItemList> {
    const url = `${this.apiUrl}Delete/${todoItem.id}`;
    return this.http.delete<IHttpResponseItemList>(url); // Return the Observable
  }

  addToDoItem(todoItem: ToDoItem): Observable<IHttpResponseItem> {
    return this.http.post<IHttpResponseItem>(this.apiUrl + 'Post', todoItem); // Return the Observable
  }
}
