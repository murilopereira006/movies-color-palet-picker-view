import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip'
import SvgClipboard from '../../assets/copysvgrepocom.svg'

export default function ColorPicker({ tooltipConfig }) {
    return (
        <Tooltip
            id={tooltipConfig.id}
            place={tooltipConfig.place}
            style={{ backgroundColor: `${tooltipConfig.color}`, color: "#222", display: "flex", alignItems: "center", justifyContent: "space-around", cursor: "pointer" }}
            openOnClick
        >
            <img src={SvgClipboard} alt="clipboard SVG" style={{ width: "20px", color: "#222", cursor: "pointer" }} />
            <span style={{ cursor: "pointer" }} > {tooltipConfig.color}</span>
        </Tooltip>
    );
}

ColorPicker.propTypes = {
    tooltipConfig: PropTypes.object
};

