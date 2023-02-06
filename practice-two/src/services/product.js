import request from '../utils/request'

const add = async (values) => {
  const res = await request.post(import.meta.env.VITE_API_PRODUCTS, values).catch((error) => {
    throw error
  })

  return res.data
}

const edit = async (id, values) => {
  const res = await request.patch(import.meta.env.VITE_API_PRODUCTS + `/${id}`, values).catch((error) => {
    throw error
  })

  return res.data
}

const remove = async (id) => {
  const res = await request.delete(import.meta.env.VITE_API_PRODUCTS + `/${id}`).catch((error) => {
    throw error
  })

  return res.data
}

const productService = {
  add,
  edit,
  remove,
}

export default productService
