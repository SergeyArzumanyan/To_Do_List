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
    width: 100%;
    height: 100dvh;
    background: rgb(37, 147, 30);
    background: -moz-linear-gradient(0deg, #193325, #509151);
    background: -webkit-linear-gradient(0deg, #193325, #509151);
    background: linear-gradient(0deg, #193325, #509151);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
