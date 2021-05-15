import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ed-egpn-jonas.herokuapp.com/api/',
    timeout: 2000,
    headers: { 'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
  })

export default instance