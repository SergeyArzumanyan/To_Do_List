import styled from "styled-components";

import ListActions from "./components/ActionsBlock/ListActions.tsx";
import ToDoList from "./components/ListBlock/ToDoList.tsx";
import AddEditItemModal from "./components/Global/AddEditItemModal.tsx";
import { store } from "./States/store.ts";
import { Provider } from "react-redux";


function App() {
  return (
      <Provider store={store}>
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
    background: rgb(37,147,30);
    background: -moz-linear-gradient(0deg , #193325, #509151);
    background: -webkit-linear-gradient(0deg, #193325, #509151);
    background: linear-gradient(0deg, #193325, #509151);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export default App;
