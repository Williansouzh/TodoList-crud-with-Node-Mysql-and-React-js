import styled from 'styled-components';

export const Container = styled.div`
    
    margin: 10vh auto  ;
    background-color: white;
    width: 50vw;
    height: 90vh;
    border-radius: .5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;

    hr{
        width: 100%;
    }

    nav{
        display: flex;
        justify-content: space-between;
        width: 100%;
        display: flex;
    }
    nav .navButtons{
        display: flex;
    }
    form{
        width: 100%;
    }
    .newTaskInput{
        width: 100%;
        margin-bottom: 1em;
        font-size: 1em;
        padding: 1em;
        border-radius: .3em;
        width: 100%;
        outline: none;
        border: 1px solid gray;
        color: gray;
    }
    @media (max-width: 700px){
    width: 80vw;
}
`;

export const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
}


`