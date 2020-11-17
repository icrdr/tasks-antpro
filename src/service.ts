import { request } from 'umi';

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function logout() {
  return request('/api/logout');
}
