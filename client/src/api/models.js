import { userAxiosInstance } from "../libs/axiosInstance";
const API_URL = userAxiosInstance();

export const getModels = async () => {
    const response = await API_URL.get("/models");
    return response.data;
};

export const uploadModel = async (formData) => {
    const response = await API_URL.post(`/models/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
};
