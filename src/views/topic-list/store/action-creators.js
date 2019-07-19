import { fromJS } from 'immutable';
import constants from './constants';
import { get } from '../../../utils/http';

const changeTopicListAction = (topics) => ({
  type: constants.CHANGE_TOPIC_LIST,
  topics: fromJS(topics),
});

const setTopicLoadingAction = (isLoading) => ({
  type: constants.SET_TOPIC_LOADING,
  isLoading
})

const getTopicListAction = (tabId) => dispatch => {
  const params = {
    tab: tabId,
    mdrender: false,
  }
  get('/topics', params).then(res => {
    if(res.success) {
      const topics = res.data;
      dispatch(changeTopicListAction(topics));
    }
    dispatch(setTopicLoadingAction(false));
  })
}

export default {
  getTopicListAction,
  setTopicLoadingAction
}
