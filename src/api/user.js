import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login/',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info/',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

/**
 * Get user list by page
 * @param {Integer} page Page number
 * @param {Integer} pageSize Per page size
 * @param {String} keyword Keyword
 * @param {String} sortName Sort column name
 * @param {String} sortOrder Sort order
 */
export function getUserList(page, pageSize, keyword, sortName, sortOrder) {
  const params = {
    page: page,
    page_size: pageSize,
    keyword: keyword,
    sort_name: sortName,
    sort_order: sortOrder
  }

  return request({
    url: '/user/list/',
    method: 'get',
    params: params
  })
}
