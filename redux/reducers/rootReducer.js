import notificationReducer from './notificationReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    notification: notificationReducer,
});

export default rootReducer;