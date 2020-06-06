import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-2350a.firebaseio.com/'
})

export default instance;