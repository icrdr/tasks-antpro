import { request } from 'umi';


export async function login(params: User.LoginParamsType) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function logout() {
  return request('/api/logout');
}
