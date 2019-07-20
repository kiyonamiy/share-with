import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

import LoadingSpin from '../../components/loading-spin';
import Content from '../topic-detail/components/content';

import ReplyList from './components/reply-list';

import { actionCreators } from './store/';

class TopicDetail extends PureComponent {

  getTopicId() {
    return this.props.match.params.id;
  }

  componentDidMount() {
    const { getTopicDetail } = this.props;
    getTopicDetail(this.getTopicId());
  }

  render() {
    let { topicDetail } = this.props;
    topicDetail = topicDetail.toJS();
    return (
        <Card>
            { topicDetail.content == null ? <LoadingSpin /> : <Fragment><Content topicDetail={topicDetail} /><ReplyList replies={topicDetail.replies} /></Fragment>}
        </Card>
    )
  }
}

const mapStateToProps = state => ({
  topicDetail: state.getIn(['topicDetail', 'topicDetail']),
});

const mapDispatchToProps = dispatch => ({
  getTopicDetail(topicId) {
    dispatch(actionCreators.getTopicDetailAction(topicId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
