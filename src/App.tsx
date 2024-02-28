import styled from "styled-components";
import { Provider } from "react-redux";


import { store } from "@Redux/store";
import { ListActions } from "@Components/SearchAddBlock";
import { ToDoList } from "@Components/ListBlock";
import { AddEditItemModal } from "@Components/Global";

export const App = () => {
    return (
        <Provider store={ store }>
            <AppWrapper>
                <ListActions/>
                <ToDoList/>
                <AddEditItemModal/>
            </AppWrapper>
        </Provider>
    )
}

const AppWrapper = styled.div`
    width: 60%;
    height: 100dvh;
    margin: 0;
    padding: 4% 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    @media (max-width: 768px) {
        padding: 10% 0;
    }
`;
