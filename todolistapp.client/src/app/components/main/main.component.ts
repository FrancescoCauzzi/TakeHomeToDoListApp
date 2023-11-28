import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  title: string = 'Todo List';
  showAddTodo: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTodo = value));
  }

  ngOnInit(): void {}

  toggleAddToDo() {
    this.uiService.toggleAddTodo();
  }
}
