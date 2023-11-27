import { ToDoItem } from './ToDoItem';

export interface CustomHttpResponse {
  success: boolean;
  message: string;
  data?: ToDoItem[]; // 'data' is optional to accommodate both response types
}
