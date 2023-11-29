import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  pageContent: string =
    'This app is a little full-stack app done as a training. The back end is run using an ASP.NET Core MVC app, the Front-End is realised using Angular 15.0.5';
}
