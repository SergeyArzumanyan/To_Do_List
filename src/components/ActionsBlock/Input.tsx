import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../../States/actions.ts";

interface InputProps {
    Placeholder: string;
}

const Input = ({ Placeholder }: InputProps) => {
    const dispatch = useDispatch();
    const SearchToDos = (e) => {
        dispatch(setSearchInput(e.target.value));
    };

    return <TextInput type="text"
                      placeholder={ Placeholder }
                      onChange={ SearchToDos }/>
};

const TextInput = styled.input`
    width: 100%;
    height: 36px;
    font-size: 12px;
    padding: 10px;
    padding-inline-end: 10px;
    margin: 0;
    border: none;
    outline: none;
    border-radius: 10px;
    transition: box-shadow 0.2s;
    background: #1a1919;

    &:focus, &:focus-visible {
        box-shadow: 0 0 0 2px #464646;
    }
`;

export default Input;