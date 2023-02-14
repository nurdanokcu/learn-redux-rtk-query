import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mate.academy/students-api',
})

export const client = {
  async get (url) {
    const response = await instance.get(url)
    return response.data;
  },

  async post (url, data) {
    const response = await instance.post(url, data)
    return response.data;
  }
}