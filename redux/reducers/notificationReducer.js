import {DISMISS_NOTE} from '../actions/notificationActions'

const notificationReducer = (state = {dismissed: false}, action) => {
  switch (action.type) {
    case DISMISS_NOTE:
        return {...state, dismissed: true};
    default:
        return {...state};
  }
  return {...state};
};

export default notificationReducer