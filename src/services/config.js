import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://blue-backend-api.herokuapp.com/api',
});
