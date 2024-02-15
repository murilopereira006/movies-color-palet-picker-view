import PropTypes from 'prop-types';
import { Container, IndividualColor } from './styles';

export default function ColorsRetanguloDisplayer({ arrayOfColors }) {
    return (
        <Container>
            {
                arrayOfColors.map((color, index) => {
                    return (
                        <IndividualColor key={index} color={color} />
                    );
                })
            }
        </Container>
    );
}

ColorsRetanguloDisplayer.propTypes = {
    arrayOfColors: PropTypes.array
};
