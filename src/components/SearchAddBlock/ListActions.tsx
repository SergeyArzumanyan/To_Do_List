import { useDispatch } from "react-redux";

import styled from "styled-components";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { toggleModal } from "@Redux/actions";
import { Input } from "@Components/SearchAddBlock";
import { RoundButton } from "@Components/Global";

export const ListActions = () => {
    const dispatch = useDispatch();

    const openAddModal = () => {
        dispatch(toggleModal({ IsOpen: true }));
    };

    return (
        <ActionsWrapper>
            <Input Placeholder='Search'/>
            <RoundButton OnClick={ openAddModal }
                         FontSize={ '14px' }
                         Width={ '2.5rem' }
                         Height={ '2rem' }
                         Icon={ faPlus }/>
        </ActionsWrapper>
    );
}

const ActionsWrapper = styled.div`
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
`;