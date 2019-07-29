import React from 'react';
import PropTypes from 'prop-types';
import './xm-button.css'

const XmButton = ({ value }) => {
    return (
        <button className="xmBtn">
            {value}
        </button>
    )
}

XmButton.propTypes = {
    text: PropTypes.any
};

export default XmButton;
