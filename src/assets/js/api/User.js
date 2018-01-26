import ajax from '../Ajax'

// 用户登录接口
export const userLogin = (userinfo) => {
  const option = {
    url: '/api/user/v2/public/login',
    method: 'post',
    data: JSON.stringify(userinfo),
    contentType: 'application/json'
  }
  return ajax(option)
}

// 获取当前登录用户的信息
export const getUserInfo = () => {
  const option = {
    url: '/api/user/v1/user/getOperatorInfo',
    method: 'get'
  }
  return ajax(option)
}
