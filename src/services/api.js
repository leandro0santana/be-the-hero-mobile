import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-be-thehero.herokuapp.com/'
});

export default api;