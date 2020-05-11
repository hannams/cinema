import React from 'react';
import "./button.css";
import PropTypes from 'prop-types';

const Button = ({type, title}) => {
    return (
            <button className="btn" type={type}>
                {title}
            </button>
    )
};

Button.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
};

Button.defaultProps = {
    type: 'button',
    title: 'Отправить',
};

export default Button;