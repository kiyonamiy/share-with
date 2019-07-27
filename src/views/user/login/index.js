import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { LoginWrapper } from './style';
import UserContainer from '../components/user-container';

import history from '../../../utils/history';
import { hasLoggedIn } from '../../../utils/user';
import actionCreators from '../store/action-creators';

class UserLogin extends PureComponent {

  componentDidMount() {
    if(hasLoggedIn()) {
      history.replace('/user/info');
    }
  }

  render() {

    const { loginInputValue, handleLoginInputChange, handleLoginButtonClick } = this.props;

    return (
      <UserContainer>
        <LoginWrapper>
          <Input.Password placeholder="请输入 Cnode AccessToken" onChange={handleLoginInputChange}/>
          <Button
            type="primary"
            style={{width: 300, marginTop: 15}}
            onClick={()=>{handleLoginButtonClick(loginInputValue);}}
          >登录</Button>
        </LoginWrapper>
      </UserContainer>
    )
  }
}

const mapStateToProps = state => ({
  loginInputValue: state.getIn(['user', 'loginInputValue']),
  userInfo: state.getIn(['user', 'userInfo']),
  errorCode: state.getIn(['user', 'errorCode']),
});

const mapDispatchToProps = dispatch => ({
  handleLoginInputChange(e) {
    const loginInputValue = e.target.value;
    dispatch(actionCreators.loginInputChangeAction(loginInputValue));
  },
  handleLoginButtonClick(finalLoginInputValue) {
    dispatch(actionCreators.checkLoginAction(finalLoginInputValue));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
