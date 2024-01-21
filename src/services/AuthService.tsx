import axios, { AxiosResponse } from 'axios';

const AUTH_REST_API_BASE_URL = 'http://localhost:8080/api/auth';

interface RegisterObject {
    name: string;
    username: string;
    email: string;
    password: string;
}

interface LoginObject {
    usernameOrEmail: string;
    password: string;
}

export const registerAPICall = (registerObj: RegisterObject): Promise<AxiosResponse<any>> => {
    return axios.post(`${AUTH_REST_API_BASE_URL}/register`, registerObj);
};

export const loginAPICall = (usernameOrEmail: string, password: string): Promise<AxiosResponse<any>> => {
    return axios.post(`${AUTH_REST_API_BASE_URL}/login`, { usernameOrEmail, password });
};
