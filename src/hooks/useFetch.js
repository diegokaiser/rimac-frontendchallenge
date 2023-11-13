import axios from "axios";

const baseAPI = axios.create({
  baseURL: '//rimac-front-end-challenge.netlify.app/api'
})

export const getUser = async () => {
  const res = await baseAPI.get(`/user.json`)
  return res.data
}

export const getPlan = async () => {
  const res = await baseAPI.get(`/plans.json`)
  return res.data.list
}
