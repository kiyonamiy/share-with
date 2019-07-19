import { fromJS } from 'immutable';
import constants from './constants';

// const topics = [];
// for(let i = 0; i < 30; i ++) {
//   topics.push({
//     id: `5cbfd9aca86ae80ce64b3175${i}`,
//     authorId: '4f447c2f0a8abae26e01b27d',
//     tab: 'share',
//     content: 'fork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail contentfork detail content',
//     title: `Node ${i} 值得关注的新特性`,
//     lastReplyAt: '2019-07-12T04:34:56.342Z',
//     good: false,
//     top: true,
//     replyCount: 53,
//     visitCount: 63945,
//     createAt: '2019-04-24T03:36:12.582Z',
//     author: {
//       loginName: 'atian25',
//       avatarUrl: 'https://avatars2.githubusercontent.com/u/227713?v=4&s=120',
//     },
//   });
// }

const categories = [
  {
    id: 'all',
    name: '全部',
    icon: 'table',
  },
  {
    id: 'good',
    name: '精华',
    icon: 'money-collect',
  },
  {
    id: 'share',
    name: '分享',
    icon: 'share-alt',
  },
  {
    id: 'ask',
    name: '问答',
    icon: 'bug',
  },
  {
    id: 'job',
    name: '招聘',
    icon: 'idcard',
  },
];

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
