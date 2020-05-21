import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Button from "../button/Button";

const Header = ({hasToken, logout}) => {
    const history = useHistory();

    const action = hasToken
        ? {
            handleClick: () => logout(),
            label: "Выйти",
        } : {
            handleClick: () => history.push('/login'),
            label: "Войти"
        };


    return (
        <div className="header">
            <div className="header__info">
                <div className="header__text">CINEMA</div>
                <div className="header__nav">
                    <a href="/" className="header__nav-item">Главная</a>
                    <a href="/movies" className="header__nav-item">Фильмы</a>
                    <a href="/screenings" className="header__nav-item">Сеансы</a>
                </div>
            </div>
            <Button className="header__btn" onClick={() => action.handleClick()}>{action.label}</Button>
        </div>
    )

};

 Header.propTypes = {
    hasToken: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};


Header.defaultProps = {
    hasToken: false,
};



export default Header;