# Share With : CNode 社区另一个客户端

## 简介

此项目是对在趣链实习所做的“趣书”项目的总结和扩展（二者功能相似度很高），对接了 CNode 主要的 API ，日后还会更新完善细节。

CNode API 文档地址：https://cnodejs.org/api

## 技术栈

- 使用 react-create-app 脚手架创建项目
- react、redux、react-router 全家桶
- 使用 Antd、styled-components 完成页面布局
- 使用 redux-thunk 统一异步和同步 action 操作流程
- 使用 immutable.js 防止数据误修改

## 测试

测试前，需要一份 CNode 的 AccessToken ，这是 CNode 网站提供的认证 token。

如何获取 AccessToken ？用户登录后，在[设置页面](https://cnodejs.org/setting)可以看到自己的 AccessToken，验证使用 `/accesstoken` 接口，登录后长期保存 AccessToken。

```shell
git clone https://github.com/514723273/share-with.git
cd share-with
npm start
```

## 改进想法

- [ ] 使用 Koa2 完成服务端渲染
- [ ] 使用 Koa2 搭建自己的 Share With 后台
- [ ] 完善收藏、点赞等接口

## 部分界面截图

### 首页

![share-with-topic-list](https://raw.githubusercontent.com/514723273/.md-Pictures/master/share-with-topic-list.png)

### 话题详情页

![share-with-topic-detail](https://raw.githubusercontent.com/514723273/.md-Pictures/master/share-with-topic-detail.png)

### 登录页

![show-with-user-login](https://raw.githubusercontent.com/514723273/.md-Pictures/master/show-with-user-login.png)

### 用户详情页

![show-with-user-info](https://raw.githubusercontent.com/514723273/.md-Pictures/master/show-with-user-info.png)
