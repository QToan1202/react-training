import request from './request'

const GET = async (path, options = {}) => {
  const res = await request.get(path, options)
  return res.data
}

export default GET
