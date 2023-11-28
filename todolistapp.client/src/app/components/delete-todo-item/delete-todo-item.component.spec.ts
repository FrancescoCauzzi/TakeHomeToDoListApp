import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodoItemComponent } from './delete-todo-item.component';

describe('DeleteTodoItemComponent', () => {
  let component: DeleteTodoItemComponent;
  let fixture: ComponentFixture<DeleteTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
