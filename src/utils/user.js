export const getUserName = () => {
  if(!hasLoggedIn()) {
    return null;
  }
  return JSON.parse(sessionStorage.getItem('userInfo')).loginname;
}

export const getUserAvatar = () => {
  if(!hasLoggedIn()) {
    return null;
  }
  return JSON.parse(sessionStorage.getItem('userInfo')).avatar_url;
}

export const hasLoggedIn = () => {
  const userInfo = sessionStorage.getItem('userInfo');      // 暂时使用 sessionStorage 来判断用户是否登录
  return userInfo != null;
}


export const login = (userInfo) => {
  sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
}

export const logout = () => {
  sessionStorage.removeItem('userInfo');
}
