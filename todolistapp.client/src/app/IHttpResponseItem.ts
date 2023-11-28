import { ToDoItem } from './IToDoItem';

export interface IHttpResponseItem {
  success: boolean;
  message: string;
  item: ToDoItem; // Optional, in case the server sends back the item
}
