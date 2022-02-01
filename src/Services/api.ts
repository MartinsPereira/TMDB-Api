import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTFkMjVkY2QzNmM1MjA4MGNlNmQ2ODY3Y2VjZjhhZCIsInN1YiI6IjYxZjg2YThmZGNmODc1MDAxYjk2ZmE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GW0ucIRWvr1rmmzOZbPQXgAoWi0SUIp4icH2ZIrJNTE'

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: { Authorization: 'Bearer ' + token }
})

