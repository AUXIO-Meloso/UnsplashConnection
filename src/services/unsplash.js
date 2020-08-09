import axios from 'axios';

// You can get the authorization id on the Unsplash website

export default  axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID *Put your authorization id here*'
    }
});