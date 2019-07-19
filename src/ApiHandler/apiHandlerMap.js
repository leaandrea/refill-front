import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/contribute`;

export const contribute = () => axios.post(BASE_URL);
