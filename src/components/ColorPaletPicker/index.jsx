import PropTypes from 'prop-types';
import ColorPicker from '../ColorPickerCursor'
import { Container, IndividualColor } from './styles';

const extraSpaceForHoverInteraction = 2;

export default function ColorsRetanguloDisplayer({ arrayOfColors }) {
    return (
        <Container>
            {/* {
                arrayOfColors.map((color, index) => {
                    return (
                        <>
                            <ColorPicker id={`${index + color}`} place="top" key={index} color={color} content={`${color}`} />
                            <IndividualColor data-tooltip-id={`${index + color}`} key={index} color={color} size={arrayOfColors.length + extraSpaceForHoverInteraction} />
                        </>
                    )
                })
            } */}
            <ColorPicker teste={{ id: "my-tooltip-2", place: "top", content: "Red" }} />
            <IndividualColor data-tooltip-id="my-tooltip-2" color={'red'} size={20} />
        </Container >
    );
}

ColorsRetanguloDisplayer.propTypes = {
    arrayOfColors: PropTypes.array
};
