import ajax from '../Ajax'

// 根据文件ID获取文件地址
export const getFileUrlById = (id, onSuccess, onError) => {
  if (!id) {
    return false
  }
  const option = {
    url: `/api/common/file/download/${id}`,
    method: 'get'
  }
  ajax(option, onSuccess, onError)
}

// 登录
export const login = (param, onSuccess, onError) => {
  if (!param || !param.userName || !param.password) {
    if (onError) {
      onError('参数有误')
    }
    return false
  }
  const option = {
    url: `/api/common/user/login`,
    method: 'post',
    data: param
  }
  ajax(option, onSuccess, onError)
}

// 登出
export const logout = (param, onSuccess, onError) => {
  const option = {
    url: `/api/common/user/logout`,
    method: 'get'
  }
  ajax(option, onSuccess, onError)
}

// 注册
export const register = (param, onSuccess, onError) => {
  const option = {
    url: '/api/common/user/register',
    method: 'post',
    data: JSON.stringify(param),
    contentType: 'application/json'
  }
  ajax(option, onSuccess, onError)
}
