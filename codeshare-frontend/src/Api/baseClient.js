import axios from "axios";
import { BASE_URL } from "./urls";

const API_CLIENT = axios.create({
    baseURL: BASE_URL
});

export default API_CLIENT;
