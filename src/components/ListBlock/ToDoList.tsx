import styled from "styled-components";
import { useSelector } from "react-redux";

import ToDoItem from "./ToDoItem.tsx";
import { RootState } from "../../States/store.ts";
import { IToDoItem } from "../../interfaces/ToDoItem.interface.ts";

const ToDoList = () => {
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

export default ToDoList;