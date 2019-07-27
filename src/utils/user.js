export const getUserName = () => {
  if(!hasLoggedIn()) {
    return null;
  }
  return JSON.parse(localStorage.getItem('userInfo')).loginname;
}

export const getUserAvatar = () => {
  if(!hasLoggedIn()) {
    return null;
  }
  return JSON.parse(localStorage.getItem('userInfo')).avatar_url;
}

export const hasLoggedIn = () => {
  const userInfo = localStorage.getItem('userInfo');      // 暂时使用 localStorage 来判断用户是否登录
  return userInfo != null;
}


export const login = (userInfo) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

export const logout = () => {
  localStorage.removeItem('userInfo');
}
