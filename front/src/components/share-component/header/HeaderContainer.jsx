import { connect } from 'react-redux';

import Header from "./Header";
import {isEmptyObject} from "../../../scripts/isEmptyObject";

const mapStateToProps = (store) => {
    return {
        hasToken: !isEmptyObject(store.user.token),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: dispatch(logoutUser()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);