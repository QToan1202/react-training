import { AxiosRequestConfig, AxiosResponse } from 'axios'
import request from '@utils/request'
import { TProduct } from '@types'

const get = async (path: string, options: AxiosRequestConfig = {}): Promise<TProduct[]> => {
  const res = await request.get(path, options).catch((error) => {
    throw error
  })

  return res.data
}

const find = async (path: string, query: string): Promise<TProduct[]> => {
  const res = await request.get(path, { params: { q: query } }).catch((error) => {
    throw error
  })

  return res.data
}

const add = async (path: string, options: Readonly<{ arg: Omit<TProduct, "id"> }>): Promise<TProduct> => {
  const res = await request.post(path, options.arg).catch((error) => {
    throw error
  })

  return res.data
}

const edit = async (path: string, options: Readonly<{ arg: Partial<TProduct> }>): Promise<TProduct> => {
  const res = await request.patch(path + `/${options.arg.id}`, options.arg).catch((error) => {
    throw error
  })

  return res.data
}

const remove = async (id: number): Promise<AxiosResponse['status']> => {
  const res = await request.delete(import.meta.env.VITE_API_PRODUCTS + `/${id}`).catch((error) => {
    throw error
  })

  return res.status
}

const productService = {
  get,
  find,
  add,
  edit,
  remove,
}

export default productService
