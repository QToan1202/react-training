import axios, { AxiosInstance } from 'axios'

export const request: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
})

export default request
