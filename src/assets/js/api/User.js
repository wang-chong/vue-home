import ajax from '../Ajax'

// 获取所有user的list
export const getAllUser = (onSuccess, onError) => {
  const option = {
    url: '/user/allUser',
    method: 'get'
  }
  ajax(option, onSuccess, onError)
}

// 创建一个用户
export const createUser = (param, onSuccess, onError) => {
  const option = {
    url: '/user/createUser',
    method: 'post',
    data: JSON.stringify(param),
    contentType: 'application/json'
  }
  ajax(option, onSuccess, onError)
}

// 删除一个用户
export const deleteUser = (param, onSuccess, onError) => {
  const option = {
    url: '/user/deleteUser',
    method: 'get',
    params: param
  }
  ajax(option, onSuccess, onError)
}

// 删除最后一个用户
export const deleteLastUser = (onSuccess, onError) => {
  const option = {
    url: '/user/deleteLastUser',
    method: 'get'
  }
  ajax(option, onSuccess, onError)
}

// 更新一个用户的信息
export const updateUser = (param, onSuccess, onError) => {
  const option = {
    url: '/user/updateUser',
    method: 'post',
    data: param
  }
  ajax(option, onSuccess, onError)
}

// 查询用户信息
export const referUser = (param, onSuccess, onError) => {
  const option = {
    url: '/user/referUser',
    method: 'get',
    params: param
  }
  ajax(option, onSuccess, onError)
}
