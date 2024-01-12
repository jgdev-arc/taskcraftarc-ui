import axios, { AxiosResponse } from "axios";

const BASE_REST_API_URL = 'http://localhost:8080/api/tasks';

export const getAllTasks = () => {
    return axios.get(BASE_REST_API_URL);
};

export const saveTask = (task: any): Promise<AxiosResponse<any>> => {
    return axios.post(BASE_REST_API_URL, task);
};

export const getTask = (id: number): Promise<AxiosResponse<any>> => {
    return axios.get(BASE_REST_API_URL + '/' + id);
};
