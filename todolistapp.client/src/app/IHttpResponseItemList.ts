import { ToDoItem } from './IToDoItem';

export interface IHttpResponseItemList {
  success: boolean;
  message: string;
  data?: ToDoItem[]; // 'data' is optional to accommodate both response types
}
