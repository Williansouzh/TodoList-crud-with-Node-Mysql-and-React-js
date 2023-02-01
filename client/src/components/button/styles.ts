import styled from "styled-components";

type ButtonProps = {
    emphasis?: boolean
}

export const Button = styled.button<ButtonProps>`
    background-color: ${props=>props.emphasis? "#3f95fc": "transparent"};
    color: ${props=>props.emphasis? "white": "gray"};
    font-size: 1em;
    padding: .5em 1em;
    cursor: pointer;
    border: none;
    &:hover{
        color: blue;
    }
`