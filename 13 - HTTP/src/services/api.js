import axios from 'axios';

const api = axios.create({

//Bloqueio https do Senac
//Base url: 'https://viacep.com.br/ws'

});

baseURL: 'https://viacep.com.br/ws'

export default api;