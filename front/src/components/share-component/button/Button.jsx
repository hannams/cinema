import React from 'react';
import "./button.css";
import PropTypes from 'prop-types';

const Button = ({type, title}) => {
    return (
        <div className="container">
            <button className="btn" type={type}>
                {title}
            </button>
        </div>
    
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