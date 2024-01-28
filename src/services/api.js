import axios from 'axios';

/*
Rodar com ip: json-server --watch -d 180 --host 192.168.15.36 db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.15.36:3000/'
})

export default api;