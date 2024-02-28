import { IToDoItem } from "./ToDoItem.interface.ts";

export interface IAddEditModal {
    IsOpen: boolean;
    Item?: IToDoItem;
}