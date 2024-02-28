import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import styled from "styled-components";

import { RootState } from "@Redux/store";
import { addItem, editItem, toggleModal } from '@Redux/actions';
import { IToDoItem } from "@Interfaces/ToDoItem.interface";

export const AddEditItemModal = () => {
    const IsOpen = useSelector((state: RootState) => state.ToDos.IsModalOpened);
    const EditModeItem = useSelector((state: RootState) => state.ToDos.CurrentItem);
    const dispatch = useDispatch();

    const [id, setId] = useState(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        if (EditModeItem) {
            setContent(EditModeItem.Content);
            setId(EditModeItem.Id);
        }
    }, [IsOpen]);

    const handleInputChange = (e) => {
        setContent((e.target as HTMLInputElement).value);
    };

    const onSave = () => {
        if (content.trim()) {
            const Item: IToDoItem = {
                Id: id,
                Content: content,
                IsDone: false,
            };

            dispatch(EditModeItem ? editItem(Item) : addItem(Item));
            onClose();
        }
    };

    const onClose = () => {
        dispatch(toggleModal({ IsOpen: false }));
        setId(null);
        setContent('');
    }

    return (
        <Modal isOpen={ IsOpen } onRequestClose={ onClose }>
            <ModalContentWrapper>
                <h2 className='text-lg text-center'>
                    { EditModeItem ? 'Edit Item' : 'Add Item' }
                </h2>
                <TextInput placeholder='Type here'
                           value={ content }
                           onChange={ handleInputChange }
                           autoFocus
                />

                <ActionsWrapper>
                    <ModalBtn className='cancel-btn' onClick={ onClose }>Cancel</ModalBtn>
                    <ModalBtn className='save-btn' onClick={ onSave }>Save</ModalBtn>
                </ActionsWrapper>
            </ModalContentWrapper>
        </Modal>
    );
};

const ModalContentWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
`;

const TextInput = styled.textarea`
    width: 100%;
    height: 100%;
    font-size: 12px;
    padding: 10px;
    padding-inline-end: 10px;
    margin: 0;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: box-shadow 0.2s;
    background: #1a1919;
    resize: none;

    &:focus, &:focus-visible {
        box-shadow: 0 0 0 2px #464646;
    }
`;

const ActionsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (min-width: 769px) {
        justify-content: flex-end;
    }
`;

const ModalBtn = styled.button`
    padding: 6px 12px;
    margin: 0;
    border-radius: 8px;
    font-size: 12px;
    transition: all 0.2s;

    &.save-btn {
        background-color: #509151;
    }

    &.cancel-btn {
        background-color: #193325;
    }

    &:hover {
        background-color: #0c1811;
    }

    &:focus-visible {
        outline: none;
        border: none;
        box-shadow: 0 0 0 1px #55b95c;
    }
`;