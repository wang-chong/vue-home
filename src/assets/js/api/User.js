import ajax from '../Ajax'

// 获取所有user的list
export const getAllUser = (onSuccess, onError) => {
  const option = {
    url: '/api/user/allUser',
    method: 'get'
  }
  ajax(option, onSuccess, onError)
}

// 删除一个用户
export const deleteUser = (param, onSuccess, onError) => {
  const option = {
    url: '/api/user/deleteUser',
    method: 'get',
    params: param
  }
  ajax(option, onSuccess, onError)
}

// 删除最后一个用户
export const deleteLastUser = (onSuccess, onError) => {
  const option = {
    url: '/api/user/deleteLastUser',
    method: 'get'
  }
  ajax(option, onSuccess, onError)
}

// 更新一个用户的信息
export const updateUser = (param, onSuccess, onError) => {
  const option = {
    url: '/api/user/updateUser',
    method: 'post',
    data: param
  }
  ajax(option, onSuccess, onError)
}

// 查询用户信息
export const referUser = (param, onSuccess, onError) => {
  const option = {
    url: '/api/user/referUser',
    method: 'get',
    params: param
  }
  ajax(option, onSuccess, onError)
}
