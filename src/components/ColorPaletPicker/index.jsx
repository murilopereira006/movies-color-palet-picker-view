import React from 'react';
import PropTypes from 'prop-types';
import { Container, IndividualColor } from './styles';

export default function ColorsRetanguloDisplayer(arrayOfColors) {
    return (
        <Container>
            <IndividualColor />
        </Container>
    );
}

ColorsRetanguloDisplayer.propTypes = {
    arrayOfColors: PropTypes.array
};
