import axios from "axios";

export const userAxiosInstance = () => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_REACT_APP_SERVER_DOMAIN,
    });
    return instance;
};
