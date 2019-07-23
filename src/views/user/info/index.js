import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import UserContainer from '../components/user-container';
import LoadingSpin from '../../../components/loading-spin';
import { getUserName } from '../../../utils/user';
import actionCreators from '../store/action-creators';

import RecentMessage from './recent-message';

class UserInfo extends PureComponent {

  componentDidMount() {
    const { getUserInfo, getTopicCollect } = this.props;
    getUserInfo(getUserName());
    getTopicCollect(getUserName());
  }

  render() {
    let { userInfo, topicCollect } = this.props;
    if(userInfo == null) {
      return <LoadingSpin />;
    }
    userInfo = userInfo.toJS();
    topicCollect = topicCollect.toJS();
    console.log(topicCollect);
    return (
      <UserContainer avatarSrc={userInfo.avatar_url} username={userInfo.loginname} >
        <RecentMessage recentTopics={userInfo.recent_topics} recentReplies={userInfo.recent_replies} topicCollect={topicCollect} />
      </UserContainer>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.getIn(['user', 'userInfo']),
  topicCollect: state.getIn(['user', 'topicCollect']),
});

const mapDispatchToProps = dispatch => ({
  getUserInfo(username) {
    dispatch(actionCreators.getUserInfoAction(username));
  },
  getTopicCollect(username) {
    dispatch(actionCreators.getTopicCollectAction(username));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
