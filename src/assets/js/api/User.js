import ajax from '../Ajax'

// 获取所有user的list
export const getAllUser = () => {
  const option = {
    url: '/user/allUser',
    method: 'get'
  }
  return ajax(option)
}

// 创建一个用户
export const createUser = (param) => {
  const option = {
    url: '/user/createUser',
    method: 'post',
    data: JSON.stringify(param),
    contentType: 'application/json'
  }
  return ajax(option)
}

// 删除一个用户
export const deleteUser = (param) => {
  const option = {
    url: '/user/deleteUser',
    method: 'get',
    params: param
  }
  return ajax(option)
}

// 删除最后一个用户
export const deleteLastUser = () => {
  const option = {
    url: '/user/deleteLastUser',
    method: 'get'
  }
  return ajax(option)
}

// 更新一个用户的信息
export const updateUser = (param) => {
  const option = {
    url: '/user/updateUser',
    method: 'post',
    data: param
  }
  return ajax(option)
}

// 查询用户信息
export const referUser = (param) => {
  const option = {
    url: '/user/referUser',
    method: 'get',
    params: param
  }
  return ajax(option)
}
