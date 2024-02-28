import styled from "styled-components";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../Global/RoundButton.tsx";
import { IToDoItem } from "../../interfaces/ToDoItem.interface.ts";
import { useDispatch } from "react-redux";
import { deleteItem, toggleItemAsDone, toggleModal } from "../../States/actions.ts";

interface ToDoItemProps {
    ToDoItem: IToDoItem;
}

const ToDoItem = ({ ToDoItem }: ToDoItemProps) => {
    const dispatch = useDispatch();

    const DeleteItem = () => {
        dispatch(deleteItem(ToDoItem));
    };

    const EditItem = () => {
        dispatch(toggleModal({ IsOpen: true, Item: ToDoItem }));
    };

    const MarkAsDone = () => {
        dispatch(toggleItemAsDone({ Id: ToDoItem.Id }));
    }

    return (
        <Item>
            <ItemText onClick={ MarkAsDone }
            style={{textDecoration: ToDoItem.IsDone ? 'line-through' : ''}}>{ ToDoItem.Content }</ItemText>

            <ButtonsWrapper>
                <RoundButton FontSize='12px'
                             Width='36px'
                             Height='36px'
                             BgColor='#509151'
                             OnClick={ EditItem }
                             Icon={ faPencil }/>

                <RoundButton FontSize='12px'
                             Width='36px'
                             Height='36px'
                             BgColor='#193325'
                             OnClick={ DeleteItem }
                             Icon={ faTrash }/>
            </ButtonsWrapper>
        </Item>
    );
};

const Item = styled.div`
    padding: 8px;
    margin: 0;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    background: #2f2e2e;
    user-select: none;
`;

const ItemText = styled.span`
    max-width: 200px;
    margin: 0;
    padding: 8px;
    font-size: 14px;
    cursor: pointer;
    word-break: break-word;
    text-wrap: balance;
`;

const ButtonsWrapper = styled.div`
    padding: 8px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

export default ToDoItem;