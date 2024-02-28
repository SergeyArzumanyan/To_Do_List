import styled from "styled-components";
import { useSelector } from "react-redux";

import { RootState } from "@Redux/store";
import { ToDoItem } from "@Components/ListBlock";
import { IToDoItem } from "@Interfaces/ToDoItem.interface";

export const ToDoList = () => {
    const ToDos: IToDoItem[] = useSelector((state: RootState) => state.ToDos.toDoItems);
    const SearchInput: string = useSelector((state: RootState) => state.ToDos.SearchInput);

    const FilteredToDos: IToDoItem[] = SearchInput ?
        ToDos.filter(item =>
            item.Content.toLowerCase().includes(SearchInput.toLowerCase())
        ) :
        ToDos;

    return (
        <ToDosWrapper>
            { FilteredToDos.map(item =>
                <ToDoItem key={ item.Id }
                          ToDoItem={ item }
                />)
            }
        </ToDosWrapper>
    );
};

const ToDosWrapper = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;