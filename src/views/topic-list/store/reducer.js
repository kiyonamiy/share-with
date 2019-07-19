import { fromJS } from 'immutable';
import constants from './constants';

import CATEGORY from '../../../constants/category';

const categories = [];
for(let key in CATEGORY) {
  categories.push({
    id: key,
    name: CATEGORY[key].name,
    icon: CATEGORY[key].icon,
  })
};

const defaultState = fromJS({
  topics: [],
  categories,
  defaultCategoryIndex: 0,
  isTopicListLoading: false,
});

export default (state=defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_TOPIC_LIST:
      return state.set('topics', action.topics);
    case constants.SET_TOPIC_LOADING:
      return state.set('isTopicListLoading', action.isLoading);
    default:
      return state;
  }
}
