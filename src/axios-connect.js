
import axios from 'axios';

const instance = axios.create({
    baseURL:"https://react-burger-292d5.firebaseio.com/",
})

export default instance;