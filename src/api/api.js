import axios from "axios";

const DEV_URL = "http://localhost:5000";
const PROD_URL = "http://45.84.225.231:5000";

const instance = axios.create({
    baseURL: PROD_URL
})

export default instance;