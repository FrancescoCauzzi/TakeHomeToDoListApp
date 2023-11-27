import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/app/ToDoItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://localhost:7259/API/ToDoItem/GetAllToDoItems';

  constructor(private http: HttpClient) {} // Inject HttpClient

  getToDoItems(): Observable<HttpResponse> {
    // Return the Observable
    return this.http.get<HttpResponse>(this.apiUrl);
  }
}

interface HttpResponse {
  success: boolean;
  message: string;
  data: ToDoItem[];
}
