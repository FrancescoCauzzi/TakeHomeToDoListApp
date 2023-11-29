import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { ToDoItemsComponent } from './components/to-do-items/to-do-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';
import { ModifyTodoItemComponent } from './components/modify-todo-item/modify-todo-item.component';
import { DeleteTodoItemComponent } from './components/delete-todo-item/delete-todo-item.component';
import { AboutComponent } from './components/pages/about/about.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonComponent,
    ToDoItemsComponent,
    AddTodoItemComponent,
    ModifyTodoItemComponent,
    DeleteTodoItemComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
