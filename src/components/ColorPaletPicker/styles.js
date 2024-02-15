import styled from 'styled-components'

export const Container = styled.div`
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: center;
`;

export const IndividualColor = styled.div`
    min-width: 1px;
    width: ${props => 400 / props.size}px;
    height: 100%;
    background-color: ${props => props.color};

    &:hover {
        margin: 0 2.5px;
    }
`;