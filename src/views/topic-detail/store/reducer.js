import { fromJS } from 'immutable';
import constants from './constants';
const defaultState = fromJS({
  topicDetail: {}
});

export default (state=defaultState, action) => {
  switch(action.type) {
    case constants.SHOW_TOPIC_DETAIL:
      return state.set('topicDetail', fromJS(action.topicDetail));
    default:
      return state;
  }
}
