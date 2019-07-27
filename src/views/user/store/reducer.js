import { fromJS } from 'immutable';
import constants from './constants';

const defaultState = fromJS({
  loginInputValue: '',
  userInfo: null,
  topicCollect: [],
  hasLoggedIn: false,
});

export default (state=defaultState, action) => {
  switch(action.type) {
    case constants.LOGIN_INPUT_CHANGE:
      return state.set('loginInputValue', action.loginInputValue);
    case constants.CHANGE_USER_INFO:
      return state.set('userInfo', fromJS(action.userInfo));
    case constants.CHANGE_TOPIC_COLLECT:
      return state.set('topicCollect', fromJS(action.topicCollect));
    case constants.CHANGE_LOGIN_STATUS:
      return state.set('hasLoggedIn', action.hasLoggedIn);
    default:
      return state;
  }
}
