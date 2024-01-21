import axios, { AxiosResponse } from 'axios';
import { getToken } from './AuthService';

const BASE_REST_API_URL = 'http://localhost:8080/api/tasks';

axios.interceptors.request.use(
    function (config) {
        config.headers['Authorization'] = getToken();
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export const getAllTasks = (): Promise<AxiosResponse<Task[]>> => {
    return axios.get<Task[]>(BASE_REST_API_URL);
};

export const saveTask = (task: Task): Promise<AxiosResponse<Task>> => {
    return axios.post<Task>(BASE_REST_API_URL, task);
};

export const getTask = (id: number): Promise<AxiosResponse<Task>> => {
    return axios.get<Task>(`${BASE_REST_API_URL}/${id}`);
};

export const updateTask = (id: number, task: Task): Promise<AxiosResponse<Task>> => {
    return axios.put<Task>(`${BASE_REST_API_URL}/${id}`, task);
};

export const deleteTask = (id: number): Promise<AxiosResponse<void>> => {
    return axios.delete<void>(`${BASE_REST_API_URL}/${id}`);
};

export const completeTask = (id: number): Promise<AxiosResponse<void>> => {
    return axios.patch<void>(`${BASE_REST_API_URL}/${id}/complete`);
};

export const incompleteTask = (id: number): Promise<AxiosResponse<void>> => {
    return axios.patch<void>(`${BASE_REST_API_URL}/${id}/incomplete`);
};
