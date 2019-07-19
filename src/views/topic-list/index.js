import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Tabs, Icon, Card, Button, Spin, Alert } from 'antd';

import List from './components/list/';
import { actionCreators } from './store';
const { TabPane } = Tabs;

const TopicListSpin = () => (
  <div
    style={{
      textAlign: 'center',
      margin: '100px 0',
    }}
  >
    <Spin tip="Loading..." size="large" />
  </div>
)

class TopicList extends PureComponent {

  componentDidMount() {
    const { getTopicList, setTopicLoading } = this.props;
    setTopicLoading(true);
    getTopicList('all');
  }

  render() {

    let { categories, defaultCategoryIndex, topics, isTopicListLoading, getTopicList, setTopicLoading } = this.props;

    categories = categories.toJS();
    topics = topics.toJS();

    console.log(topics);

    const publishTopicButton = <Button type="primary">发布话题</Button>

    return (
      <Card>
        <Tabs
          defaultActiveKey={categories[defaultCategoryIndex].id}
          tabBarExtraContent={publishTopicButton}
          onChange={(activeKey) => {setTopicLoading(true); getTopicList(activeKey)}}
        >
          {
            categories.map(item => (
              <TabPane
                tab={
                  <span>
                    <Icon type={item.icon} />
                    {item.name}
                  </span>
                }
                key={item.id}
              >
                { isTopicListLoading ? <TopicListSpin /> : <List topics={topics} /> }
              </TabPane>
            ))
          }
        </Tabs>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.getIn(['topicList', 'categories']),
  topics: state.getIn(['topicList', 'topics']),
  defaultCategoryIndex: state.getIn(['topicList', 'defaultCategoryIndex']),
  isTopicListLoading: state.getIn(['topicList', 'isTopicListLoading']),
});

const mapDispatchToProps = dispatch => ({
  setTopicLoading(isLoading) {
    dispatch(actionCreators.setTopicLoadingAction(isLoading));
  },
  getTopicList(tabId) {
    dispatch(actionCreators.getTopicListAction(tabId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
