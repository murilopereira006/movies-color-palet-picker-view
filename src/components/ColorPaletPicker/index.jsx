import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ColorPicker from '../ColorPickerCursor'
import { Container, IndividualColor } from './styles';

const extraSpaceForHoverInteraction = 2;

export default function ColorsRetanguloDisplayer({ arrayOfColors }) {
    return (
        <Container>
            {
                arrayOfColors.map((color, index) => {
                    return (
                        <CopyToClipboard key={index} text="hello" onCopy={() => console.log("copiado")} >
                            <>
                                <ColorPicker tooltipConfig={{ id: `${index + color}`, place: "top", color: `${color}` }} />
                                <IndividualColor data-tooltip-id={`${index + color}`} color={color} size={arrayOfColors.length + extraSpaceForHoverInteraction} />
                            </>
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
