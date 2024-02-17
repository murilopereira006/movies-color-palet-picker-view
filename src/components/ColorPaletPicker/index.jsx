import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ColorPicker from '../ColorPickerCursor'
import { Container, IndividualColor, ButtonPicker } from './styles';

const extraSpaceForHoverInteraction = 2;

export default function ColorsRetanguloDisplayer({ arrayOfColors }) {
    return (
        <Container>
            {
                arrayOfColors.map((color, index) => {
                    return (
                        <CopyToClipboard key={index} text={color} onCopy={() => console.log("copiado")} >
                            <ButtonPicker >
                                <ColorPicker tooltipConfig={{ id: `${index + color}`, place: "top", color: `${color}` }} />
                                <IndividualColor data-tooltip-id={`${index + color}`} color={color} size={arrayOfColors.length + extraSpaceForHoverInteraction} />
                            </ButtonPicker>
                        </CopyToClipboard>
                    )
                })
            }
        </Container >
    );
}

ColorsRetanguloDisplayer.propTypes = {
    arrayOfColors: PropTypes.array
};
