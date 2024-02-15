import PropTypes from 'prop-types';
import ColorPicker from '../ColorPickerCursor'
import { Container, IndividualColor } from './styles';

const extraSpaceForHoverInteraction = 2;

export default function ColorsRetanguloDisplayer({ arrayOfColors }) {
    return (
        <Container>
            {
                arrayOfColors.map((color, index) => {
                    return (
                        <>
                            <ColorPicker tooltipConfig={{ id: `${index + color}`, place: "top", color: `${color}` }} key={'tooltip' + index} />
                            <IndividualColor data-tooltip-id={`${index + color}`} key={index} color={color} size={arrayOfColors.length + extraSpaceForHoverInteraction} />
                        </>
                    )
                })
            }
        </Container >
    );
}

ColorsRetanguloDisplayer.propTypes = {
    arrayOfColors: PropTypes.array
};
