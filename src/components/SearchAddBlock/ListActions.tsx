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
     <div className='flex flex-col gap-8'>
         <h1 className='text-2xl text-center'>To Do List</h1>
         <ActionsWrapper>
             <Input Placeholder='Search'/>
             <RoundButton OnClick={ openAddModal }
                          FontSize={ '14px' }
                          Width={ '2.5rem' }
                          Height={ '2rem' }
                          Icon={ faPlus }/>
         </ActionsWrapper>
     </div>
    );
}

const ActionsWrapper = styled.div`
    width: 75%;
    margin: 0 auto;
    padding: 0;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`;