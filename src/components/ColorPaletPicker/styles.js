import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.width}px;    
    min-width: 400px;
    max-width: 1000px;
    height: 100px;
    display: flex;
    justify-content: center;
    border: solid 1px #ccc;
`;

export const IndividualColor = styled.div`
    min-width: 1px;
    width: ${props => 400 / props.size}px;
    height: 100%;
    background-color: ${props => props.color};
    cursor: pointer;

    &:hover {
        margin: 0 2.5px;
    }
`;

export const ButtonPicker = styled.button`
    border-radius: 0px;
    border: 0px solid transparent;
    padding: 0;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
    transition: none;

    &:focus, focus-visible {
        outline: transparent;
    }
`;