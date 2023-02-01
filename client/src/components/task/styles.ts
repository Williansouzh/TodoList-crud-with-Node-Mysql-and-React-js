import styled from "styled-components";

export const TaskContainer = styled.div`
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    text-align: left;
    border-bottom: 1px solid gray;
    nav input[type=checkbox]{
        width: 50px;
        background-color: red;
    }
    .iconDelete{
        background-color: transparent;
        border: none;
        font-weight: bolder;
        font-size: 2em;
        cursor: pointer;
        padding-bottom: .5em;
    }
    .iconDelete:hover{
        color: red;
    }
`