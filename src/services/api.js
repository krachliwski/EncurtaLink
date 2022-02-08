import axios from 'axios';

export const key = "b3ed938b2b29bf8fa9305285b39acfc552b2f4b5";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;