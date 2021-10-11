import axios from 'axios';

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
});

export default api;
