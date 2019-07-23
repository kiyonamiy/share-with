import { combineReducers } from 'redux-immutable';
import { reducer as topicList } from '../views/topic-list/store';
import { reducer as topicDetail } from '../views/topic-detail/store';
import { reducer as user } from '../views/user/store';

export default combineReducers({
  topicList,
  topicDetail,
  user
});
