import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://egpn-banco-de-questoes.herokuapp.com/api/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
  })

export default instance