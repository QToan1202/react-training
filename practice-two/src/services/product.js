import request from '../utils/request'

const get = async (path, options = {}) => {
  const res = await request.get(path, options).catch((error) => {
    throw error
  })

  return res.data
}

const add = async (path, { arg: values }) => {
  const res = await request.post(path, values).catch((error) => {
    throw error
  })

  return res.data
}

const edit = async (path, id, { arg: values }) => {
  const res = await request.patch(import.meta.env.VITE_API_PRODUCTS + `/${id}`, values).catch((error) => {
    throw error
  })

  return res.data
}

const remove = async (id) => {
  const res = await request.delete(import.meta.env.VITE_API_PRODUCTS + `/${id}`).catch((error) => {
    throw error
  })

  return res.status
}

const productService = {
  get,
  add,
  edit,
  remove,
}

export default productService
