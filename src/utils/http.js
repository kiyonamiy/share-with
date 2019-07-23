import axios from 'axios';

const BASE_URL = ' https://cnodejs.org/api/v1';

const queryObjToStr = (url,  obj) => {
  const str = Object.keys(obj).reduce((result, key) => {
    result = `${result}${key}=${obj[key]}&`;
    return result;
  }, `${url}?`);
  return str.substring(0, str.length - 1);    // 除掉最后多余的 &
}

const get = (url, params) => {
  return new Promise((resovle, reject) => {
    axios.get(queryObjToStr(BASE_URL.concat(url), params)).then(res => {
      resovle(res.data);
    }).catch(reject);
  });
}

const post = (url, data) => {
  return new Promise((resovle, reject) => {
    axios.post(BASE_URL.concat(url), data).then(res => {
      resovle(res.data);
    }).catch(reject);
  })
}

export {
  get, post
}
