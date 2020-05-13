import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route 
    {...rest}
    render={ (props) => 
            rest.hasToken ? <Component {...rest} /> : <Redirect to='/'/>
    }
    />
);

ProtectedRoute.propTypes = {
    hasToken: PropTypes.bool.isRequired,
};

ProtectedRoute.defaultProps = {
    hasToken: false,
};

export default ProtectedRoute;