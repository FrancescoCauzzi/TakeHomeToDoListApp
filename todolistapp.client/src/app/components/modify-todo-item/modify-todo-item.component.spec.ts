import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTodoItemComponent } from './modify-todo-item.component';

describe('ModifyTodoItemComponent', () => {
  let component: ModifyTodoItemComponent;
  let fixture: ComponentFixture<ModifyTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
