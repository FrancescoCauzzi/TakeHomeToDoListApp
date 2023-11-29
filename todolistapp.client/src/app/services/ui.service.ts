import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTodo: boolean = false;
  private showEditTodo: boolean = false;
  private showDeleteTodo: boolean = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private subject = new Subject<any>();
  constructor() {}

  toggleAddTodo(): void {
    this.showAddTodo = !this.showAddTodo;
    this.subject.next(this.showAddTodo);
  }

  // toggleEditTodo(): void {
  //   this.showEditTodo = !this.showEditTodo;
  //   this.subject.next(this.showEditTodo);
  // }

  // toggleDeleteTodo(): void {
  //   this.showDeleteTodo = !this.showDeleteTodo;
  //   this.subject.next(this.showDeleteTodo);
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
