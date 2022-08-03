import axios from 'axios'

/* const BASE_URL = "https://poptin-laravel-api.herokuapp.com/api/" */
const BASE_URL = "http://127.0.0.1:8000/api/"

const _client = axios.create({
    baseURL: BASE_URL,
    timeout: 60 * 1 * 1000, // Let's say you want to wait at least 1 mins
})

const GET = async (url, data) => 
    await _client.get(url, data)

const POST = async (url, data) => 
    await _client.post(url, data)

const PUT = async (url, data) => 
    await _client.put(url, data)

const DELETE = async (url, id) => 
    await _client.delete(url, id)

    
export const client = { GET, POST, PUT, DELETE }