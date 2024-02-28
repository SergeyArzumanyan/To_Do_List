import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface RoundButtonProps {
    Icon: IconDefinition;
    Width: string;
    Height: string;
    FontSize: string;
    BgColor?: string;
    OnClick?: (...args) => void;
}
const RoundButton = ({ Icon, Width, Height, FontSize, BgColor, OnClick }: RoundButtonProps) => {
    return (
        <RoundBtn className='text-sm'
                  type='button'
                  onClick={ OnClick }
                  style={ { width: Width, height: Height, fontSize: FontSize, background: BgColor } }>
            <FontAwesomeIcon fontSize={ FontSize } icon={ Icon }/>
        </RoundBtn>
    );
};

const RoundBtn = styled.button`
    border-radius: 50%;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    color: white;
    background-color: #499f4f;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.2s;
    user-select: none;

    &:focus, &:focus-visible {
        box-shadow: 0 0 0 1px #55b95c;
    }
`;

export default RoundButton;