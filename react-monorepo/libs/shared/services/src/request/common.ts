import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const request: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
})

export const get = async <T>(path: string, options: AxiosRequestConfig = {}): Promise<T[]> => {
  const res = await request.get(path, options).catch((error) => {
    throw error
  })

  return res.data
}

export const find = async <T>(path: string, options: AxiosRequestConfig = {}): Promise<T> => {
  const res = await request.get(path, options).catch((error) => {
    throw error
  })

  return res.data
}

export const add = async <T>(path: string, options: Readonly<Omit<T, 'id'>>): Promise<T> => {
  const res = await request.post(path, options).catch((error) => {
    throw error
  })

  return res.data
}

export const edit = async <T>(path: string, id: number, options: Readonly<Partial<T>>): Promise<T> => {
  const res = await request.patch(path + `/${id}`, options).catch((error) => {
    throw error
  })

  return res.data
}

export const remove = async (path: string, id: number): Promise<AxiosResponse['status']> => {
  const res = await request.delete(path + `/${id}`).catch((error) => {
    throw error
  })

  return res.status
}
