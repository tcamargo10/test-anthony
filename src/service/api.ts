import axios, { AxiosRequestConfig } from 'axios';

const buildAxios = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create(config);
  return axiosInstance;
};

export const apiGateway = buildAxios({
  baseURL: process.env.ENDPOINT,
});
