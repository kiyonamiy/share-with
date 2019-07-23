
export const getUserName = () => {
  if(!hasLoggedIn()) {
    return null;
  }
  return JSON.parse(localStorage.getItem('userInfo')).loginname;
}

export const hasLoggedIn = () => {
  const userInfo = localStorage.getItem('userInfo');      // 暂时使用 localStorage 来判断用户是否登录
  return userInfo != null;
}
