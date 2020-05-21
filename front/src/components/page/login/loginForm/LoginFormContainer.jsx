import {LoginForm} from "./LoginForm";
import {connect} from "react-redux";
import { thunkPostUserData } from "../../../../serve";


const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(thunkPostUserData(user)),
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);