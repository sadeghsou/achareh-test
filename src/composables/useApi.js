import axios from 'axios'
function useApi() {
  const {
    VITE_API_BASE_URL: baseURL = 'https://stage.achareh.ir/api/karfarmas',
    VITE_API_TOKEN: token = 'MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4'
  } = import.meta.env
  return axios.create({ baseURL, headers: { Authorization: `Basic ${token}` } })
}
export default useApi()
