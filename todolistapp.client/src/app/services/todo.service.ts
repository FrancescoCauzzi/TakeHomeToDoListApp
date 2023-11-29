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

  // CRUDs
  // method to get all items (READ)
  getToDoItems(): Observable<IHttpResponseItemList> {
    // Return the Observable
    return this.http.get<IHttpResponseItemList>(
      this.apiUrl + 'GetAllToDoItems'
    );
  }
  // DELETE
  deleteToDoItem(todoItem: ToDoItem): Observable<IHttpResponseItemList> {
    const url = `${this.apiUrl}Delete/${todoItem.id}`;
    return this.http.delete<IHttpResponseItemList>(url); // Return the Observable
  }
  // CREATE
  addToDoItem(todoItem: ToDoItem): Observable<IHttpResponseItem> {
    return this.http.post<IHttpResponseItem>(this.apiUrl + 'Post', todoItem); // Return the Observable
  }

  // UPDATE
  editToDoItem(todoItem: ToDoItem): Observable<IHttpResponseItem> {
    console.log(todoItem);
    console.log(todoItem.id);
    console.log(todoItem.title);
    console.log(todoItem.content);

    const url = `${this.apiUrl}Update/${todoItem.id}`; // Construct the URL with the item ID
    return this.http.put<IHttpResponseItem>(url, todoItem);
  }
}
