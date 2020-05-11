import React from 'react';
import PropTypes from 'prop-types';
import {Field, ErrorMessage} from 'formik';
import './input.css';

const Input = ({name, type, placeholder}) => {

	return (
		<div className="form__wrapper">
			<Field 
				name={name}
				type={type}
				placeholder={placeholder}
				className="form__field"
			/>
			<span className="form__error-message">
				<ErrorMessage
				name={name}
				/>
			</span>
		</div>
	)

};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

Input.defaultProps = {
	type: 'text',
};


export default Input;