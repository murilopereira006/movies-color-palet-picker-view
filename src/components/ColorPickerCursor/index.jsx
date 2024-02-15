import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip'

export default function ColorPicker({ teste, color }) {
    return (
        <Tooltip
            id={teste.id}
            place={teste.place}
            content={teste.content}
            style={{ backgroundColor: "rgb(0, 255, 30)", color: "#222" }}
        />
    );
}

ColorPicker.propTypes = {
    color: PropTypes.string
};

