import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    height: 100px;
    border: 1px solid black;
`;

export const IndividualColor = styled.div`
    width: 1px;
    height: 100%;
    // background-color: ${props => props.color};
    background-color: red;

    &:hover {
        width: 3px;
    }
`;
