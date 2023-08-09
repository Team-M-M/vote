import { API_URL } from '@constants/apiUrl';
import Axios, { AxiosRequestHeaders } from 'axios';

const axios = Axios.create({
  baseURL: API_URL.CLIENT,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then(res => res.data);
  },
  post: function post<Response = unknown, Request = any>(url: string, body?: Request, headers?: any) {
    return axios.post<Response>(url, body, { headers: headers ?? {} }).then(res => res.data);
  },
};
