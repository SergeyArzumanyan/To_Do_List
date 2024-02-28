import { createAction } from '@reduxjs/toolkit';
import { IToDoItem } from "../interfaces/ToDoItem.interface.ts";
import { IAddEditModal } from "../interfaces/AddEditModal.interface.ts";

export const toggleModal = createAction<IAddEditModal>('TOGGLE_MODAL');
export const addItem = createAction<IToDoItem>('ADD_ITEM');
export const deleteItem = createAction<IToDoItem>('DELETE_ITEM');
export const editItem = createAction<IToDoItem>('EDIT_ITEM');
export const toggleItemAsDone = createAction<{ Id: number }>('MARK_ITEM_AS_DONE');
export const setSearchInput = createAction<string>('SEARCH_TO_DOS');