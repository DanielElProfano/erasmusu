import { SERVER_URL } from '../config/calls/spotaHomeCalls'

export const fetchAllData = async () => {
  try {
    // const response = await fetch('https://gorest.co.in/public/v1/users')
    const response = await fetch(SERVER_URL)
    const data = await response.json();
    if (!response.ok) {
      return new Error(response.message)
    }
    return data
  } catch (error) {
    return error.message
  }
}
// const reader = response.body.getReader();
// console.log("reader" , await reader.read())
// const data = await response.json()