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
        <ToDosWrapper className='poxos'>
            { FilteredToDos.map(item =>
                <ToDoItem key={ item.Id }
                          ToDoItem={ item }
                />)
            }
        </ToDosWrapper>
    );
};

const ToDosWrapper = styled.div`
    width: 60%;
    max-height: 62dvh;
    margin: 20px auto;
    padding: 0 6px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    @media (max-width: 768px) {
        width: 100%;
        max-height: 70dvh;
    }

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #509151;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #0e130c;
        border-radius: 10px;
    }
`;