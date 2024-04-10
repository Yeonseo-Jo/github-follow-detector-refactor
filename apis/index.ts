import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "If-None-Match": "",
  },
});

// token 입력 후 헤더에 저장하는 함수
export const setInstanceToken = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
