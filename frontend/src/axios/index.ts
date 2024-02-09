import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: "http://34.234.77.89:8000/api/v1",
    baseURL: "http://localhost:8000/api/v1",
});

export default axiosInstance;