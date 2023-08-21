import { API_URL } from '@constants/apiUrl';
import Axios from 'axios';

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

const iconFetchRequests: Record<string, Promise<string>> = {};
export function fetchIcon(name: string, { baseUrl }: { baseUrl: string }) {
  if (iconFetchRequests[name] !== undefined) {
    return iconFetchRequests[name];
  }

  const request = new Promise<string>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${baseUrl}/${name}.svg`);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) {
        return reject(xhr.responseText);
      }

      resolve(xhr.response);
    });
  });

  iconFetchRequests[name] = request;

  return request;
}
