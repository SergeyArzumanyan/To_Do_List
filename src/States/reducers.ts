import { ActionReducerMapBuilder, createReducer } from '@reduxjs/toolkit';
import {
    addItem,
    deleteItem,
    editItem,
    setSearchInput,
    toggleItemAsDone,
    toggleModal,
} from './actions';
import { IToDoItem } from "../interfaces/ToDoItem.interface.ts";

interface TodosState {
    toDoItems: IToDoItem[];
    SearchInput: string;
    CurrentItem: IToDoItem;
    IsModalOpened: boolean;
}

const initialState: TodosState = {
    toDoItems: JSON.parse(localStorage.getItem('ToDos')) || [],
    SearchInput: null,
    CurrentItem: null,
    IsModalOpened: false,
};

export const ToDosReducer =
    createReducer(initialState, (builder: ActionReducerMapBuilder<TodosState>) => {
        builder
            .addCase(addItem, (state, action) => {
                const newItem: IToDoItem = {
                    Id: +(new Date()),
                    Content: action.payload.Content,
                    IsDone: false,
                };

                state.toDoItems.unshift(newItem);
                localStorage.setItem('ToDos', JSON.stringify(state.toDoItems));
            })
            .addCase(deleteItem, (state, action) => {
                const { Id } = action.payload;

                state.toDoItems = state.toDoItems.filter(item => item.Id !== Id);
                localStorage.setItem('ToDos', JSON.stringify(state.toDoItems));
            })
            .addCase(editItem, (state, action) => {
                const { Id, Content } = action.payload;
                const todoItem = state.toDoItems.find(item => item.Id === Id);

                if (todoItem) {
                    todoItem.Content = Content;
                }

                localStorage.setItem('ToDos', JSON.stringify(state.toDoItems));
            })
            .addCase(toggleItemAsDone, (state, action) => {
                const { Id } = action.payload;
                const item = state.toDoItems.find(item => item.Id === Id);
                 item.IsDone = !item.IsDone;

                localStorage.setItem('ToDos', JSON.stringify(state.toDoItems));
            })
            .addCase(toggleModal, (state, action) => {
                const { Item, IsOpen } = action.payload;
                state.IsModalOpened = IsOpen;

                if (Item) {
                    state.CurrentItem = Item;
                }

                if (!IsOpen) {
                    state.CurrentItem = null;
                }
            })
            .addCase(setSearchInput, (state, action) => {
                state.SearchInput = action.payload;
            });
    });
