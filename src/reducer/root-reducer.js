import {combineReducers} from 'redux';
import userReducer from '../components/user/user.reducer';

export default combineReducers({
    user:userReducer,
});