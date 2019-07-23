import constants from './constants';

import { get, post } from '../../../utils/http';
import history from '../../../utils/history';

const loginInputChangeAction = loginInputValue => ({
  type: constants.LOGIN_INPUT_CHANGE,
  loginInputValue
});

const checkLoginAction = finalLoginInputValue => dispatch => {
  post('/accesstoken', {
    accesstoken: finalLoginInputValue,
  }).then(res => {
    if(res.success) {
      const userInfo = res;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      history.push('/user/info');
    }
  });
}

const changeUserInfoAction = userInfo => ({
  type: constants.CHANGE_USER_INFO,
  userInfo,
});

const getUserInfoAction = username => dispatch => {
  get(`/user/${username}`, {}).then(res => {
    const userInfo = res.data;
    dispatch(changeUserInfoAction(userInfo));
  })
}

const changeTopicCollect = topicCollect => ({
  type: constants.CHANGE_TOPIC_COLLECT,
  topicCollect,
})

const getTopicCollectAction = username => dispatch => {
  get(`/topic_collect/${username}`, {}).then(res => {
    const topicCollect = res.data;
    dispatch(changeTopicCollect(topicCollect));
  })
}

export default {
  loginInputChangeAction,
  checkLoginAction,
  getUserInfoAction,
  getTopicCollectAction,
}
