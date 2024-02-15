import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip'

export default function ColorPicker({ tooltipConfig }) {
    return (
        <Tooltip
            id={tooltipConfig.id}
            place={tooltipConfig.place}
            content={tooltipConfig.color}
            style={{ backgroundColor: `${tooltipConfig.color}`, color: "#222" }}
        />
    );
}

ColorPicker.propTypes = {
    tooltipConfig: PropTypes.object
};

