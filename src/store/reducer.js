import { combineReducers } from 'redux-immutable';
import { reducer as topicList } from '../views/topic-list/store';
export default combineReducers({
  topicList,
});
