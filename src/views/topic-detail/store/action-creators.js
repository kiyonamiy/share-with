import constants from './constants';
import { get } from '../../../utils/http';

const showTopicDetailAction = topicDetail => ({
  type: constants.SHOW_TOPIC_DETAIL,
  topicDetail,
})

const getTopicDetailAction = topicId => dispatch => {
  const params = {
    mdrender: false,
  }
  get(`/topic/${topicId}`, params).then(res => {
    if(res.success) {
      dispatch(showTopicDetailAction(res.data));
    }
  })
}

export default {
  getTopicDetailAction,
}
